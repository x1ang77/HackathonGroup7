const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
    name: {
        type: String,
    },
});

module.exports = mongoose.model("leave", LeaveSchema);
