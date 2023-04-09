const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userType: {
    type: Number,
    required: true,
    default: 0,
  },
  location: {
    type: Object,
    default: null,
  },
});

module.exports = mongoose.model("User", UserSchema);
