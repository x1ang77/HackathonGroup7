const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const Profile = require("../models/Profile");
const { trusted } = require("mongoose");
require("dotenv").config();

router.post("/", auth, async (req, res) => {
    try {
        const userId = req.user._id;
        const {
            name,
            gender,
            contactNumber,
            email,
            address,
            icNumber,
            emergencyContact,
            emergencyContactName,
            emergencyContactRelationship,
            bankName,
            bankAccountNumber,
            socso,
            epf,
            incomeTax,
        } = req.body;
        const profile = new Profile({
            userId: userId,
            name,
            gender,
            contactNumber,
            email,
            address,
            icNumber,
            emergencyContact,
            emergencyContactName,
            emergencyContactRelationship,
            bankName,
            bankAccountNumber,
            socso,
            epf,
            incomeTax,
        });
        profile.save();
        return res.json({
            profile,
            message: "Profile created successfully",
        });
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Cannot create profile",
        });
    }
});

router.get("/", auth, async (req, res) => {
    try {
        const profile = await Profile.find({
            userId: req.user._id,
        });
        if (profile.length == 0)
            return res.json({ message: "No profile found" });

        return res.json(profile);
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Cannot get profile",
        });
    }
});

router.put("/", auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({
            userId: req.user._id,
        });

        if (profile.length == 0)
            return res.json({ message: "No profile found" });

        const editProfile = await Profile.findByIdAndUpdate(
            profile._id,
            req.body,
            { new: true }
        );
        return res.json({
            editProfile,
            message: "Successfully updated profile",
        });
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Cannot update profile",
        });
    }
});

module.exports = router;
