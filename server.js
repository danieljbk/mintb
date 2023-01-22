import mongoose from 'mongoose'
import express from 'express'
import path from 'path'
import dotenv from 'dotenv'

import planRouter from './src/routes/plan.js'

const app = express()
const __dirname = path.resolve()
dotenv.config()

// https://stackoverflow.com/a/40026625/16237146
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(express.json({ limit: '1mb' })) // allow bigger file transfers
app.use(express.urlencoded({ limit: '1mb', extended: true })) // allow bigger file transfers
app.get('/', (req, res) => {
  res.send("Welcome to mintb's API.")
})
app.use('/api/plan', planRouter)

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => {
  console.log('Connected to database')

  // Serve static assets in production
  if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
  }

  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log('Server has started on port ' + port)
  })
})
