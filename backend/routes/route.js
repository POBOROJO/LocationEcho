const express = require("express");
const router = express.Router();

const {home} = require("../controllers/controller");

router.get("/api", home);

router.post("/api/signup", async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    //check if a user with this username already exists
    await User.create({
        username : username,
        password : password
    })
    res.json({
        message: 'New user created successfully'
    })
});

module.exports = router;