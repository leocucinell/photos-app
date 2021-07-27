/* SECTION: External modules */
const express = require("express");

/* SECTION: Internal modules */
require("./config/db.connection");
const controllers = require("./controller/index");

/* SECTION: Instanced module */
const app = express();


/* SECTION: Server configuration */
const PORT = 4000;
app.set("view engine", "ejs");


/* SECTION: Middleware */
app.use(express.urlencoded({extended: true}));

/* SECTION: Routes */
app.get("/", (req, res, next) => {
    res.redirect("/users")
});
app.use("/users", controllers.user);


/* SECTION: Server bind */
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});