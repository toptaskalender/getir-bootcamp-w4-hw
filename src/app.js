const express     = require('express')
const { 
  authRouter,
  usersRouter,
  contactsRouter
}                 = require('./routes')
const {
  verifyAuth,
  errorHandler
}                 = require('./middlewares')
const { 
  AppError
}                 = require('./scripts/classes')

const app = express()

app.use(express.json())

app.use('/', authRouter)
app.use('/users', verifyAuth, usersRouter)
app.use('/contacts', verifyAuth, contactsRouter)

app.all('*', (req, res, next) => {
  next(new AppError('This path is not defined yet.', 500))
})

app.use(errorHandler)

module.exports = app
