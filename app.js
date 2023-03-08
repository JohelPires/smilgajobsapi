require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

// error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

// ====== Routes ======
const jobsRouter = require('./routes/jobs')
const authRouter = require('./routes/jobs')
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

// ====== start server ======
app.use(notFoundMiddleware)
const port = process.env.PORT || 2990
const start = () => {
  try {
    // connect DB
    console.log('implementar a conexão com o db')
    app.listen(port, () => {
      console.log(`Rodando na porta ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
