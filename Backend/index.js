const express = require("express");
const dotenv = require("dotenv");
const dataBase = require("./Db/connection");
const app = express();

app.use(express.json());
dotenv.config();

dataBase();

require("./Models/userModel");

app.use("/api", require("./Routes/userRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server has started at ${process.env.PORT}!`);
});
