const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    typeOfLeave: {
        type: String,
    },
    details: {
        type: String,
    },
    image: {
        type: String,
        default: null,
    },
    pending: {
        type: Number,
        default: 0,
    },
    date: {
        type: String,
    },
});

module.exports = mongoose.model("leave", LeaveSchema);
