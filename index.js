const express = require("express");
const app = express();
app.use(express.json());
require("./startup/routes")(app);
require("./startup/dbConnection")();


app.listen(3000, () => console.log("GIO is listening on port 3000"));
