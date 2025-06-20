const mongoose = require("mongoose");
// Schema
const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  frequency: {
    type: String,
    enum: ["daily", "weekly"],
    default: "daily",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completedDates: [
    {
      type: Date,
    },
  ],
});

module.exports = mongoose.model("Habit", habitSchema);
