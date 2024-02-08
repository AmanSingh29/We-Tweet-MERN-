const express = require("express");
const { handleRegisterController } = require("../Controller/userController");
const routes = express.Router();

// API to register a user
routes.post("/user/register", handleRegisterController);

module.exports = routes;
