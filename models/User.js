const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minLength: [1, "username length should be between 1 and 20."],
      maxLength: [20, "username length should be between 1 and 20."],
      unique: [true, "This username is already used."],
      required: [true, "Please provide username."],
    },
    name: {
      type: String,
      minLength: [1, "name length should be between 1 and 20."],
      maxLength: [20, "name length should be between 1 and 20."],
      required: [true, "Please provide name."],
    },
    email: {
      type: String,
      minLength: [5, "Email length should be between 5 and 30."],
      maxLength: [30, "Email length should be between 5 and 30."],
      required: [true, "Please provide Email."],
      unique: [true, "This Email is already used."],
    },
    password: {
      type: String,
      minLength: [20, "Password cannot be less than 20 characters."],
      required: [true, "Please provide Password."],
    },
    points: {
      type: Number,
      min: [0, "points cannot be less than 0."],
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
