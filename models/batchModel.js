const Joi = require("joi");
const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});
const Batch = mongoose.model("Batch", batchSchema);
function validateBatch(batch) {
  const schema = Joi.object({
    size: Joi.string().required(),
    color: Joi.string().required(),
    quantity: Joi.number().min(1).required(),
  });
  return schema.validate(batch);
}

exports.Batch = Batch;
exports.validateBatch = validateBatch;
