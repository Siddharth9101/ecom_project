require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/user.js");
const authRouter = require("./routes/auth.js");

const app = express();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to the db"))
  .catch((err) => console.error(err));

app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => console.log("Server started"));
