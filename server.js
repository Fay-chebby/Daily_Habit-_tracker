const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const habitRoutes = require("./routes/habitRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/habit", habitRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.envPORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening port on ${PORT}`);
});
