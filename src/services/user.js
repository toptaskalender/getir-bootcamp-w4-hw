const BaseService = require('./base');
const { User }    = require('../models');

class userService extends BaseService {
  async findById(id) {
    return this.model.findById(id).populate('contacts')
  }
}

module.exports = new userService(User);