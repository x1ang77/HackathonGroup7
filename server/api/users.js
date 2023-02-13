const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/User");
require("dotenv").config();

// super admin registers/create new user
router.post("/register", auth, async (req, res) => {
    try {
        const {
            name,
            username,
            password,
            department,
            executiveLevel,
            isAdmin,
        } = req.body;
        let userFound = await User.findOne({
            username,
        });
        if (userFound) {
            return res.status(400).json({
                message: "User already exists",
            });
        }

        const user = new User(req.body);
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        user.password = hash;
        user.save();
        return res.json({
            user,
            message: "Registered successfully",
        });
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Invalid Credentials",
        });
    }
});

// all users can login
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        let userFound = await User.findOne({
            username,
        });

        if (!userFound) {
            return res.status(400).json({
                message: "Username doesn't exist",
            });
        }

        let isMatch = bcrypt.compareSync(password, userFound.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Credentials",
            });
        }

        jwt.sign(
            {
                data: userFound,
            },
            process.env.SECRET_KEY,
            {
                expiresIn: "1h",
            },
            (err, token) => {
                if (err)
                    return res.status(400).json({
                        err,
                        message: "Cannot generate token",
                    });
                return res.json(token);
            }
        );
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Invalid Credentials",
        });
    }
});

// fetches all users
router.get("/", auth, async (req, res) => {
    try {
        let users = await User.find({});
        if (!users.length) return res.json({ message: "No users found" });
        return res.json(users);
    } catch (e) {
        return res.json({
            e,
            message: "Failed to get users",
        });
    }
});

// admin can get/request a single user information
router.get("/:id", auth, async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        if (!user)
            return res.status(400).json({
                message: "No user found",
            });
        return res.json(user);
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Cannot get user",
        });
    }
});

// super admin can delete a user
router.delete("/:id", auth, async (req, res) => {
    try {
        let user = await User.findByIdAndDelete(req.params.id);
        return res.json({
            user,
            message: "User successfully deleted",
        });
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Failed to delete user",
        });
    }
});

// super admin can edit a user
router.put("/:id", auth, async (req, res) => {
    try {
        let user = await User.findById(req.params.id);
        if (!user) return res.json({ message: "User does not exist" });
        user = await User.findByIdAndUpdate(req.params.id, req.body);
        return res.json({
            user,
            message: "Successfully updated user",
        });
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Cannot edit user",
        });
    }
});

module.exports = router;
