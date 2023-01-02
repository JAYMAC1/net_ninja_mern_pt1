// import express packages
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const PORT = process.env.PORT
// instantiate express application
const app = express()

// middleware
app.use(express.json)

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// route handlers
app.use('/api/workouts/', workoutRoutes)

// connect to db
mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.Mongo_URL)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log('Connected to DB & listening on port 4000!!!')
    })
  })
  .catch((error) => {
    console.log(error)
  })
