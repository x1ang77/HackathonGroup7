const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    department: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isMain: {
        type: Boolean,
        default: false,
    },
    exec: {
        type: Number
    }
});

module.exports = mongoose.model("user", UserSchema);
