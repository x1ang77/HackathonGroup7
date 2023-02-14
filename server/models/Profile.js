const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name: {
        type: String,
    },
    gender: {
        type: String,
    },
    contactNumber: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    icNumber: {
        type: String,
    },
    emergencyContact: {
        type: String,
    },
    emergencyContactName: {
        type: String,
    },
    emergencyContactRelationship: {
        type: String,
    },
    bankName: {
        type: String,
    },
    bankAccountNumber: {
        type: String,
    },
    socso: {
        type: String,
    },
    epf: {
        type: String,
    },
    incomeTax: {
        type: String,
    },
});

module.exports = mongoose.model("profile", ProfileSchema);
