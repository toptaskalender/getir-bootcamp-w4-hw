const {
  signUpValidation,
  logInValidation
}                   = require('./auth')
const {
  createContactValidation
}                   = require('./contact')

module.exports = {
  signUpValidation,
  logInValidation,

  createContactValidation
}