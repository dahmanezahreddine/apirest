const express = require("express");
const router = express.Router();
const user = require("../models/userModel");

router.get("/", (req, res) => {
  user
    .find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

router.post("/add", (req, res) => {
  user
    .create(req.body)
    .then(() => res.json("User added"))
    .catch((err) => console.log(err));
});

router.put("/update/:userId", (req, res) => {
  const userId = req.params.userId;
  user
    .updateOne({ _id: userId }, { $set: req.body })
    .then(() => res.json("User updated"))
    .catch((err) => console.log(err));
});

router.delete("/delete/:userId", (req, res) => {
  const userId = req.params.userId;
  user
    .deleteOne({ _id: userId })
    .then(() => res.json("User deleted"))
    .catch((err) => console.log(err));
});

module.exports = router;
