const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    img: {
      data: Buffer,
      contentType: String
    },
    caption: {
      type: String,
      minLength: [10, "Caption length should be between 10 and 80."],
      maxLength: [80, "Caption length should be between 10 and 80."],
      required: [true, "Please provide Caption."]
    },
    likes: {
      type: Number,
      min: [0, "Likes cannot be less than 0."],
      default: 0
    },
    postedBy: {
      type: mongoose.ObjectId,
      ref: "User",
      required: [true, "Please provide User ID."]
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Post", postSchema);

