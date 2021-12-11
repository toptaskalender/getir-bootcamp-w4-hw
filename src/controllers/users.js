const {
  catchAsync
}                 = require('../scripts/utils')
const {
  userService
}                 = require('../services')

const getMe = catchAsync(async (req, res) => {
  const { user }  = req
  const me        = await userService.findById(user._id)

  res.status(201).json({
    status: 'success',
    data: {
      data: me
    }
  })
})

module.exports = {
  getMe
}