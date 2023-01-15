// package imports
const express = require('express')
const dotenv = require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const workoutRoutes = require('./routes/workoutRoutes')

const PORT = process.env.PORT || 4000

// express app
const app = express()

// app.use(express.json())

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// route handler
app.use('/api/users', userRoutes)
app.use('/api/workouts', workoutRoutes)

// server listening
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
