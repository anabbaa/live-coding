const express = require("express");
const router = express.Router();
const allowAccess = require("../controllers/authControllers");
const userControllers = require("../controllers/userControllers");

// localhost:5000/users

router.route("/").get(allowAccess.roleCheck, userControllers.getAllUsers, (req,res)=>{
    res.render("data", {
        title: req.title,
        done: req.done,
        errors: req.session.errors,
      });
      req.session.errors = null;
    });
    


module.exports = router;
