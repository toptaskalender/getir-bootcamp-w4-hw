const mongoose    = require('mongoose')
const bcyrpt      = require('bcryptjs')

const userSchema = new mongoose.Schema({
  email: {
    type              : String,
    required          : [true, 'A user must have a email.'],
    unique            : true,
    lowercase         : true,
  },

  password: {
    type              : String,
    required          : [true, 'A user must have a password.'],
    minlength         : [8, 'A user\'s password has to be at least 8 characters long.'],      
    select            : false
  },

  passwordConfirm: {
    type              : String,
    required          : [true, 'Please confirm your password.'],
    validate          : {
      validator: function checkPasswordEquality(passwordConfirm) {
        return this.password === passwordConfirm;
      },
      message         : 'Please provide a password that is equal to the former.'
    }
  },

  firstName: {
    type              : String,
    required          : [true, 'A user must have a first name.'],
    trim              : true,
    minlength         : [2, 'A user\'s name must be at least 2 charecters.'],
    maxlength         : [20, 'A user\'s name must be less than or equal to 20 characters.']
  },

  lastName: {
    type              : String,
    required          : [true, 'A user must have a last name.'],
    trim              : true,
    minlength         : [2, 'A user\'s name must be at least 2 charecters.'],
    maxlength         : [20, 'A user\'s name must be less than or equal to 20 characters.']
  },
}, {
  toObject            : { virtuals: true },
  toJSON              : { virtuals: true },
  timestamps          : true,
  versionKey          : false
})

userSchema.virtual('contacts', {
  ref: 'Contact',
  localField: '_id',
  foreignField: 'creator'
})

userSchema.pre('save', async function(next) {
  const isPasswordChanged = this.isModified('password')

  if (!isPasswordChanged) {
    return next()
  }
  
  this.password         = await bcyrpt.hash(this.password, 12); 
  this.passwordConfirm  = undefined

  next();
});

userSchema.methods.comparePasswords = async function(password, hash) {
  return bcyrpt.compare(password, hash)
}

const User = mongoose.model('User', userSchema)

module.exports = User