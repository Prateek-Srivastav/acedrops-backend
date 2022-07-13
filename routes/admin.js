const express = require("express");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/isAuth");

const router = express.Router();

router.post("/verify", adminController.verifyShop);

router.post("/sendContactMail", adminController.sendContactMail);

module.exports = router;
