//route
const express = require("express");
const {
  getHabit,
  createHabit,
  updateHabit,
  deleteHabit,
} = require("../controller/HabitController");

const router = express.Router();

router.get("/", getHabit);
router.post("/", createHabit);
router.put("/:id", updateHabit);
router.delete("/:id", deleteHabit);

module.exports = router;
