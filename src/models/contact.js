const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
  creator: {
    type              : mongoose.Schema.Types.ObjectId,
    ref               : 'User',
    required          : [true, 'A contact must have a creator.'],
  },

  firstName: {
    type              : String,
    required          : [true, 'A contact must have a first name.'],
    trim              : true,
    minlength         : [2, 'A contact\'s first name must be at least 2 charecters.'],
    maxlength         : [20, 'A contact\'s first name must be less than or equal to 20 characters.']
  },

  lastName: {
    type              : String,
    required          : [true, 'A contact must have a last name.'],
    trim              : true,
    minlength         : [2, 'A contact\'s last name must be at least 2 charecters.'],
    maxlength         : [20, 'A contact\'s last name must be less than or equal to 20 characters.']
  },

  phoneNumber: {
    type              : Number,
    required          : [true, 'A contact must have phone number.']
  }
}, {
  timestamps: true,
  versionKey: false
})

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact