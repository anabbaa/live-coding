const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hey This is books page");
  });


  router.get("/about", (req, res) => {
    res.send("This is book about");
  });
  
  module.exports = router;
  