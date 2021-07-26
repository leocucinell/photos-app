//require express
const express = require("express");
//make a router
const router = express.Router();

//require neessary db connection
const {User} = require("../model/index");

//SECTION: Handle Routes

// Index GET / - Presentational
router.get("/")

// New GET /posts - Presentational form

// Create POST /posts - Functional

// Show GET /posts/:id - Presentational

// Edit GET /posts/:id/edit - Presentational form

// Update PUT /posts/:id - Functional

// Destroy DELETE /posts/:id - Functional



// 404 page - Presentational


//export router
module.exports = router;