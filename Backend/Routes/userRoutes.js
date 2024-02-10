const express = require("express");
const {
  handleRegisterController,
  handleLoginController,
} = require("../Controller/userController");
const routes = express.Router();

// API to register a user
routes.post("/user/register", handleRegisterController);

// API to login a user
routes.post("/user/login", handleLoginController);

module.exports = routes;
