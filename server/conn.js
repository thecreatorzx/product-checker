const mongoose = require("mongoose");

exports.connectMongoose = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/product-checker")
    .then(() => {
      console.log(" connection successful");
    })
    .catch((e) => {
      console.log(" no connection");
    });
};

const userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
});

exports.User = mongoose.model("User", userSchema);
