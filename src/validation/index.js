const Joi = require("joi");

const characterStatusValidator = Joi.object({
  id: Joi.string().min(1).max(255).required(),
});

module.exports = { characterStatusValidator };
