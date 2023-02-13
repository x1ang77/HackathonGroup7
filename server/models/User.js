const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String
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
});

module.exports = mongoose.model("user", UserSchema);
