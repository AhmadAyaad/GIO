const winston = require("winston");
const mongoose = require("mongoose");
module.exports = function () {
  mongoose
    .connect("mongodb://localhost/GIO")
    .then(() => winston.info("connected to db "));
};
