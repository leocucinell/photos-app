//require mongoose
const mongoose = require("mongoose");

//make the connection string
const connectionStr = "mongodb://localhost:27017/photoApp"

//connect to mongoDB
mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

//test the connection
mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected to ${connectionString}`)
});

mongoose.connection.on("error", (err) => {
    console.log(`Mongoose connected error: ${err}`)
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});