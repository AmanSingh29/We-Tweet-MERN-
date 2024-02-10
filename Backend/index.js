const express = require("express");
const dotenv = require("dotenv");
const dataBase = require("./Db/connection");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

dataBase();

require("./Models/userModel");

app.use("/api", require("./Routes/userRoutes"));

app.listen(process.env.PORT, () => {
  console.log(`Server has started at ${process.env.PORT}!`);
});
