const configure = require('./config')
const loaders   = require('./loaders')
const app       = require('./app')

configure()
loaders()

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running on port: ${process.env.SERVER_PORT}`)
})