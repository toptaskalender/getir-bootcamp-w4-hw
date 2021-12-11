const {
  catchAsync,
  signToken
}                 = require('../scripts/utils')
const {
  authService
}                 = require('../services')
const {
  AppError
}                 = require('../scripts/classes')

const signUp = catchAsync(async (req, res) => {
  const {
    body: data
  }             = req
  const user    = await authService.create(data)

  user.password = undefined

  const JWT = signToken(user._id)

  res.status(201).json({
    status: 'success',
    token: JWT,
    data: {
      data: user
    }
  })
})

const logIn = catchAsync(async (req, res, next) => {
  const { email, password } = req.body

  const user = await authService.findOne({ email }, '+password')

  if ( !user || !(await user.comparePasswords(password, user.password)) ) {
    return next(new AppError('User or password is wrong. Please provide correct information.', 400))
  }

  user.password = undefined

  const JWT = signToken(user._id)

  res.status(200).json({
    status: 'success',
    token: JWT,
    data: {
      data: user
    }
  })
})

module.exports = {
  signUp,
  logIn
}