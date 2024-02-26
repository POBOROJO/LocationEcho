const express = require("express");
const app = express();

const routes = require("./routes/route");

const connectDB = require("./db/connection");

app.use(express.json());
app.use("/api", routes);

const PORT = 3000;
const MongoURI = "mongodb+srv://parijatbhatt1:XriKznROSZhGhSL8@cluster0.2nwhboq.mongodb.net/locationecho?retryWrites=true&w=majority";

const start = async () => {
    try {
        await connectDB(MongoURI);
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

start();
