const express = require("express");
const router = express.Router();


const {home, signup} = require("../controllers/controller");

router.get("/api", home);

router.post("/api/signup", signup);

module.exports = router;