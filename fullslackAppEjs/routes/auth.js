const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const multer = require("multer");
const allowedAccess = require("../controllers/authControllers");
//const { body, validationResult } = require("express-validator");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // function to check
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 },
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/gif" ||
      file.mimetype == "image/png"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpeg .gif .png files are OK!"), false);
    }
  },
});

router.get("/",  (req, res) => {
  res.render("index", {
    title: "you are here",
    done: false,
    errors: req.session.errors,
  });
  req.session.errors = null;
});

router.post("/register", upload.single("avatar"), userControllers.addUser, (req,res)=>{
  res.render("index", {
    title: req.title,
    done: req.done,
    errors: req.session.errors,
  });
  req.session.errors = null;
  });


router.get("/login", allowedAccess.loggedStatus, (req, res) => {
  res.render("login", {
    title: req.title,
    done: req.done,
    errors: req.session.errors,
  });
  req.session.errors = null;
});
router.post("/login", userControllers.login);

router.get("/logout", userControllers.logout);

module.exports = router;
