const router  = require('express').Router()

const {
  validate
}             = require('../middlewares')

const {
  signUpValidation,
  logInValidation
}             = require('../validations')

const {
  signUp,
  logIn
}             = require('../controllers/auth')

router.route('/sign-up')
  .post(
    validate('body', signUpValidation),
    signUp
  )

router.route('/log-in')
  .post(
    validate('body', logInValidation),
    logIn
  )

module.exports = router