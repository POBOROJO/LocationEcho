const express = require("express");
const router = express.Router();

const User = require("../modal/modal");

const {home} = require("../controllers/controller");

router.get("/api", home);

router.post("/api/signup", async(req,res)=>{

    // const {username, password} = req.body;

    // console.log(req.body);

    //check if a user with this username already exists
    await User.create(req.body);

    res.json({
        message: 'New user created successfully'
    })
});

module.exports = router;