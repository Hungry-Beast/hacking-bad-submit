const mongoose = require("mongoose");
const DusbinsSchema = new mongoose.Schema({
  username: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  location: {
    type: Object,
    required: true,
  },
  weight: {
    type: Number,
  },
});

module.exports = mongoose.model("Dusbins", DusbinsSchema);
