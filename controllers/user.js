const User = require("../models/User");
const { genSaltSync, hashSync } = require("bcrypt");

const getUserById = (req, res) => {
  User.findOne({ _id: req.body.userId })
    .then((user) => {
      user.password = undefined;
      res.status(200).json({
        success: true,
        data: user,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Failed to get User!",
      });
    });
};

const addUser = (req, res) => {

};

module.exports = {
  getUserById,
  addUser
}