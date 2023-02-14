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
  slip: {
    type: String,
  },
});

module.exports = mongoose.model("leave", LeaveSchema);
