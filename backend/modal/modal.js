const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    //Scheme defination
    username: {
        type: String,
        required: [true, "Please enter a username"],
        maxlength: 20,
        minlength: 4,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: 8,
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ]
    }
});


module.exports = mongoose.model("User", UserSchema);