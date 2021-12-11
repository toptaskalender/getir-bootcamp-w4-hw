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
    .number()
})

module.exports = updateContactValidation