const express = require("express");
const router = express.Router();

const { login, checkToken } = require("../controllers/auth");
const { getUserById, addUser } = require("../controllers/user");

// CREATE -> signup -> creating a user
router.post("/", addUser);

// READ -> get logged-in user's data
router.get("/user/", checkToken, getUserById);

// READ -> login
router.post("/login", login);

module.exports = router;