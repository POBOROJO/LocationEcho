const mongoose = require("mongoose");

export default function connect() {
    mongoose.connect("mongodb+srv://parijatbhatt1:XriKznROSZhGhSL8@cluster0.2nwhboq.mongodb.net/locationecho", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    //define schema
    const AdmiSchema = new mongoose.Schema({
        //Scheme defination
        username: String,
        password: String
    });
}
