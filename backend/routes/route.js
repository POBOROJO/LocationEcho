const express = require("express");
const router = express.Router();

const {home} = require("../controllers/controller");

router.get("/", home);

module.exports = router;