const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../middleware/authenticateToken");
const Trucks = require("../models/Trucks");
const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, location, userType } = req.body;

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
      location: location,
      userType: userType,
    });

    await user.save();
    // Save the user to the database
    if(userType===1){
      const truck=new Truck({
        username:username,
        userId:user._id,
        location:location,
        carType:req.body.carType
      })
    }

    // Generate a JSON Web Token
    const token = jwt.sign({ userId: user._id }, "secret");

    // Return the token
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate a JSON Web Token
    const token = jwt.sign({ userId: user._id }, "secret");

    // Return the token
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/profile", authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, email } = req.body;

    // Update the user's profile
    const user = await User.findByIdAndUpdate(
      userId,
      { name, email },
      { new: true }
    );

    // Return the updated user object
    res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
