const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

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

router.get("/:id", async (req, res) => {
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

module.exports = router;
