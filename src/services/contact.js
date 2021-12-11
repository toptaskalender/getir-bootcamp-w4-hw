const BaseService = require('./base')
const { Contact } = require('../models')

class ContactService extends BaseService {}

module.exports = new ContactService(Contact)