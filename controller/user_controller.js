//require express
const express = require("express");
//make a router
const router = express.Router();

//require neessary db connection
const { User } = require("../model/index");

//SECTION: Handle Routes

// Index GET /users - Presentational
router.get("/", (req, res, next) => {
    User.find({}, (error, foundUsers) => {
        if(error){
            console.log(error);
            return next();
        }
        //now have access to the data stored inside mongodb
        context = {
            users: foundUsers
        }
        res.render("userIndex.ejs", context)
    });
}); 

// New GET /users/new - Presentational form
router.get("/new", (req, res, next) => {
    res.send("make a new user?");
});

// Create POST /users - Functional
router.post("/", (req, res, next) => {
    res.send("Made a new user");
});

// Show GET /users/:id - Presentational
router.get("/:id", (req, res, next) => {
    res.send("made a new user");
});

// Edit GET /users/:id/edit - Presentational form
router.get("/:id/edit", (req, res, next) => {
    res.send("editing an existing user?")
});

// Update PUT /users/:id - Functional

// Destroy DELETE /users/:id - Functional


// 404 page - Presentational
router.get("/*", (req, res, next) => {
    res.send("Error 404: cannot find page");
});


//export router
module.exports = router;