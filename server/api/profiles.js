const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const Profile = require("../models/Profile");
require("dotenv").config();

router.post("/", async (req, res) => {
    try {
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
        const post = await new Post({
            author: req.user._id,
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
        post.save();
        return res.json({
            message: "Profile created successfully",
            post,
        });
    } catch (e) {
        return res.status(400).json({
            e,
            message: "Cannot create profile",
        });
    }
});

router.get("/", async(req, res) => {
  
})