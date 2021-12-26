const express = require("express");
const router = express.Router();
//root vroute for users
// middelware other methods the same but middelware 
//ere be applied only for this app
router.get("/", (req, res)=>{
    res.send("Hey This is users page");

});

router.get("/about", (req, res) => {
    res.send("This is about");
  });
  
  module.exports = router;