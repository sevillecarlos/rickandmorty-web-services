const Joi = require("joi");

const characterStatusValidator = Joi.object({
  id: Joi.string().valid("alive", "dead", "unknown").required(),
});

module.exports = { characterStatusValidator };
