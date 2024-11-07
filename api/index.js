require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

try {
  mongoose.connect(process.env.DB_URL);
  console.log("connected to db");
} catch (error) {
  console.error(error);
}

app.use(cors());
app.use(express.json());

app.listen(3000, () => console.log("Server started"));
