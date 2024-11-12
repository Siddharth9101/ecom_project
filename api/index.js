require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/user.js");
const authRouter = require("./routes/auth.js");
const productRouter = require("./routes/product.js");
const cartRouter = require("./routes/cart.js");
const orderRouter = require("./routes/order.js");

const app = express();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Connected to the db"))
  .catch((err) => console.error(err));

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);

app.listen(3000, () => console.log("Server started"));
