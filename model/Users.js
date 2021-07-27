//require mongoose
const mongoose = require("mongoose");

//make a schema
const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: [true, "add a user name"]
    },
    password: {
        type: String,
        required: [true, "add a password"]
    },
    avatar: {
        type: String,
    }
}, {timestamps: true})

//attach schema to a model
const User = mongoose.model("User", userSchema);

//export the model
module.exports = User;