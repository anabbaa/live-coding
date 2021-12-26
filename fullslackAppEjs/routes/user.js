const express = require("express");
const router = express.Router();
const allowAccess = require("../controllers/authControllers");
const userController = require("../controllers/userControllers");

// localhost:500/user/view/Hadi
router
  .route("/view/:name")
  .get(allowAccess.allowedToView, userController.getOne);

router
  .route("/del/:id")
  .get(allowAccess.allowedToDelete, userController.deleteOneById);

module.exports = router;
