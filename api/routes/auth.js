const router = require("express").Router();
const User = require("../models/User.js");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();

    const { password, ...others } = savedUser._doc;
    res.status(201).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const userDoc = await User.findOne({ username: req.body.username });
    if (!userDoc) return res.status(401).json("Wrong credentials");

    const hashPassword = CryptoJS.AES.decrypt(
      userDoc.password,
      process.env.PASS_SECRET
    );
    const OriginalPassword = hashPassword.toString(CryptoJS.enc.Utf8);

    if (OriginalPassword !== req.body.password)
      return res.status(401).json("Wrong credentials");

    const accessToken = jwt.sign(
      {
        id: userDoc._id,
        isAdmin: userDoc.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    const { password, ...others } = userDoc._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
