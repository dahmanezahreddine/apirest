const express = require("express");
const router = require("./routes/userRoute");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
require("dotenv").config();
app.use(express.json());

mongoose
  .connect(process.env.linkdb)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.use("/", router);

app.listen(port);
