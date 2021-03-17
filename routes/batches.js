const express = require("express");
const router = express.Router();
const { Batch, validateBatch } = require("../models/batchModel");

router.post("/", async (req, res) => {
  const { error } = validateBatch(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let batch = new Batch({
    size: req.body.size,
    color: req.body.color,
    quantity: req.body.quantity,
  });
  batch = await batch.save();

  res.send(batch);
});
router.get("/", async (req, res) => {
  const batches = await Batch.find().sort({ name: 1 });
  if (!batches) return res.status(404).send("There is no batches");
  res.send(batches);
});

module.exports = router;
