const { catchAsync }      = require('../scripts/utils')
const { AppError }        = require('../scripts/classes')
const { contactService }  = require('../services')

const getContacts = catchAsync(async (req, res) => {
  const { user }  = req
  const creator   = user.id

  const contacts = await contactService.find({ creator })

  res.status(201).json({
    status: 'success',
    results: contacts.length,
    data: {
      data: contacts
    }
  })
})

const createContact = catchAsync(async (req, res) => {
  const { user, body } = req

  const data      = Object.assign(body, { creator: user.id})
  const contacts  = await contactService.create(data)

  res.status(201).json({
    status: 'success',
    data: {
      data: contacts
    }
  })
})

const updateContact = catchAsync(async (req, res) => {
  const { body: data }  = req
  const { id }          = req.params

  const contact = await contactService.update(id, data)

  res.status(201).json({
    status: 'success',
    data: {
      data: contact
    }
  })
})

const deleteContact = catchAsync(async (req, res, next) => {
  const { id } = req.params

  const contact = await contactService.delete(id)

  if (!contact) {
    return next(new AppError('There is no contact with this id.', 400))
  }

  res.status(204).json({
    status: 'success',
    data: null
  })
})

module.exports = {
  getContacts,
  createContact,
  updateContact,
  deleteContact
}