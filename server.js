/* SECTION: External modules */
const express = require("express");

/* SECTION: Internal modules */
require("./config/db.connection");

/* SECTION: Instanced module */
const app = express();


/* SECTION: Server configuration */
const PORT = 4000;


/* SECTION: Middleware */


/* SECTION: Routes */


/* SECTION: Server bind */
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});