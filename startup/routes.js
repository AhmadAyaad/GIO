const batches = require("../routes/batches");

module.exports = function (app) {
  app.use("/api/batches", batches);
};
