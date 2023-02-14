const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    department: {
        type: String,
    },
    executiveLevel: {
        type: Number,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isMain: {
        type: Boolean,
        default: false,
    },
    isReview: {
        type: Boolean,
        default: false,
    },
    annualLeave: {
        type: Number,
        default: 12,
    },
    medicalLeave: {
        type: Number,
        default: 6,
    },
    totalPoints: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model("user", UserSchema);
