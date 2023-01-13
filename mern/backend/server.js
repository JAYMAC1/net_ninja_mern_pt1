// package imports
const express = require('express')
const dotenv = require('dotenv').config()
const userRoutes = require('./routes/userRoutes')

const PORT = process.env.PORT || 4000

// express app
const app = express()

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// route handler
app.get('/app', userRoutes)

// server listening
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
