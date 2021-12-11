const Joi             = require('joi')
const {
  VALID_EMAIL_TLDS
}                     = require('../config')

const signUpValidation = Joi.object({
  email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: VALID_EMAIL_TLDS } })
    .lowercase(),

  password: Joi.string()
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9]{8,30}$')),

  passwordConfirm: Joi.ref('password'),

  firstName: Joi.string()
    .required()
    .trim()
    .min(2)
    .max(20),

  lastName: Joi.string()
    .required()
    .trim()
    .min(2)
    .max(20),
})
  .with('password', 'passwordConfirm')

module.exports = signUpValidation