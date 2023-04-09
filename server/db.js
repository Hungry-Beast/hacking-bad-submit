const mongoose = require("mongoose");

// mongoose_URI = "mongodb://localhost:27017/shristi";
mongoose_URI =
  "mongodb+srv://shristi2k23:shristi2k23@shristi23.a7ylxdk.mongodb.net/?retryWrites=true&w=majority";
// >>>>>>> development

mongoConnect = async () => {
  //   console.log("hi");
  try {
    await mongoose.connect(
      mongoose_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log("Connected to mongo Successfully!");
      }
    );
  } catch (error) {
    console.log(error);
    console.log("hi");
  }
};
module.exports = mongoConnect;
