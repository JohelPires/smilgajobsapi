require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const connectDB = require('./db/connect')

// error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

// ====== Routes ======
const jobsRouter = require('./routes/jobs')
const authRouter = require('./routes/auth')
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

// ====== start server ======
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 2990
const start = async () => {
  try {
    // connect DB
    await connectDB(process.env.MONGO_URI)
    console.log('conectado ao banco de dados...')
    app.listen(port, () => {
      console.log(`Rodando na porta ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
