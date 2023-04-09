const mongoose = require("mongoose");
const TrucksSchema = new mongoose.Schema({
  username: { type: String, required: true },
    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
  location: {
    type: Object,
    required: true,
  },
  carType: {
    type: String,
  },
});

module.exports = mongoose.model("Trucks", TrucksSchema);
