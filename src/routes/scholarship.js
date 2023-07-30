const express = require("express");
const router = express.Router();
const searchGoogle = require("../crawler/crawler");

router.get("/scholarship", async (req, res) => {
  console.log("here");
  const data = await searchGoogle("government scholarship", 3, "results.json");

  return res.status(200).send(data);
});

module.exports = router;
