// package imports
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const workoutRoutes = require('./routes/workoutRoutes')

const PORT = process.env.PORT || 4000

// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// route handler
app.use('/api/users', userRoutes)
app.use('/api/workouts', workoutRoutes)

// connect to DB
mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // server listening
    app.listen(PORT, () => {
      console.log(`Connected to DB & listening on port: ${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
