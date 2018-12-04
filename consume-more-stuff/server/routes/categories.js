const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`smoke test - categories`);
});

module.exports = router;
