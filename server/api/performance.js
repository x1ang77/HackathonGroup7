const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const { trusted } = require("mongoose");
const Performance = require("../models/Performance");
const User = require("../models/User");
require("dotenv").config();

router.post("/:id", auth, async (req, res) => {
  try {
    console.log(req.body);
    const userId = req.params.id;
    const {
      productivity,
      playAboveTheLine,
      workConsistency,
      communication,
      attendance,
    } = req.body;

    const user = await User.findById(req.params.id);
    user.isReview = true;

    const performance = new Performance({
      userId: userId,
      productivity,
      playAboveTheLine,
      workConsistency,
      communication,
      attendance,
    });
    const total =
      Number(productivity) +
      Number(playAboveTheLine) +
      Number(workConsistency) +
      Number(communication) +
      Number(attendance);
    user.totalPoints += Number(total);
    user.save();
    performance.save();
    return res.json({
      performance,
      message: "Performance rating successful",
    });
  } catch (e) {
    return res.status(400).json({
      e,
      message: "Performance rating failed",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const performance = await Performance.find({
      userId: req.params.id,
    });
    if (performance.length == 0) {
      return res.json({ message: "No performance ratings found" });
    }
    return res.json(performance);
  } catch (e) {
    return res.status(400).json({
      e,
      message: "Failed to get performance ratings",
    });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const performances = await Performance.find({});
    if (performance.length == 0)
      return res.json({ message: "No performance ratings found" });

    return res.json(performances);
  } catch (e) {
    return res.status(400).json({
      e,
      message: "Failed to get any performance ratings",
    });
  }
});

module.exports = router;
