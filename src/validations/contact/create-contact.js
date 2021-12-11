const Joi             = require('joi')

const createContactValidation = Joi.object({
  firstName: Joi
    .string()
    .required()
    .trim()
    .min(2)
    .max(20),

  lastName: Joi
    .string()
    .required()
    .trim()
    .min(2)
    .max(20),

  phoneNumber: Joi
    .number()
    .required()
})

module.exports = createContactValidation