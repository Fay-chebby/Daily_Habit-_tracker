const Habit = require("../model/Habit");

// Create habit
const createHabit = async (req, res) => {
  const habit = new Habit(req.body);
  await habit.save();
  res.json(habit);
};

// Get All habit
const getHabit = async (req, res) => {
  const habit = await Habit.find();
  res.json(habit);
};

// Update habit
const updateHabit = async (req, res) => {
  const updated = await Habit.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
};

// Delete habit
const deleteHabit = async (req, res) => {
  await Habit.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

module.exports = { getHabit, createHabit, updateHabit, deleteHabit };
