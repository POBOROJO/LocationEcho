const mongoose = require("mongoose");

export default function connect() {
    mongoose.connect("mongodb+srv://parijatbhatt1:XriKznROSZhGhSL8@cluster0.2nwhboq.mongodb.net/locationecho", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const AdmiSchema = new mongoose.Schema({
        username: String,
        password: String
    });
}