const mongoose = require("mongoose");

const PerformanceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    productivity: {
        type: Number,
    },
    playAboveTheLine: {
        type: Number,
    },
    workConsistency: {
        type: Number,
    },
    communication: {
        type: Number,
    },
    attendance: {
        type: Number,
    },
});
