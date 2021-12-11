const Joi = require('joi')

const updateContactValidation = Joi.object({
  firstName: Joi
    .string()
    .trim()
    .min(2)
    .max(20),

  lastName: Joi
    .string()
    .trim()
    .min(2)
    .max(20),

  phoneNumber: Joi
    .string()
    .length(10)
    .pattern(/^[0-9]+$/)
})

module.exports = updateContactValidation