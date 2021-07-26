/* SECTION: External modules */
const express = require("express");

/* SECTION: Internal modules */
require("./config/db.connection");
const controllers = require("./controller/index");

/* SECTION: Instanced module */
const app = express();


/* SECTION: Server configuration */
const PORT = 4000;


/* SECTION: Middleware */
app.use(express.urlencoded({extended: true}));

/* SECTION: Routes */


/* SECTION: Server bind */
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});