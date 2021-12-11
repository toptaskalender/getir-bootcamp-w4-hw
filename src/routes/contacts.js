const router  = require('express').Router()
const {
  validate
}             = require('../middlewares')
const {
  createContactValidation,
  updateContactValidation
}             = require('../validations/contact')
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact
}             = require('../controllers/contacts')

router.route('/')
  .get(getContacts)
  .post(
    validate('body', createContactValidation),
    createContact
  )

router.route('/:id')
  .patch(
    validate('body', updateContactValidation),
    updateContact
  )
  .delete(deleteContact)

module.exports = router