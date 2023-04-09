const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../middleware/authenticateToken");
const Trucks = require("../models/Trucks");
const Dusbins = require("../models/Dusbins");
const router = express.Router();

router.get("/truck", async (req, res) => {
  try {
    const trucks = await Trucks.find({});
    const positionArray = [];
    trucks.map((truck) => {
      positionArray.push(truck.position);
    });
    res.json([trucks, positionArray]);
  } catch (error) {
    res.json({ error: "Someting went wrong" });
  }
});
router.get("/dusbins", async (req, res) => {
  try {
    const dustbin = await Dusbins.find({});
    const positionArray = [];
    dustbin.map((truck) => {
      positionArray.push(truck.position);
    });
    res.json([dustbin, positionArray]);
  } catch (error) {
    res.json({ error: "Someting went wrong" });
  }
});
module.exports = router;
