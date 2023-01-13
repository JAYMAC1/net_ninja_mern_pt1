// package imports
const express = require('express')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 4000

// express app
const app = express()

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// route handler
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'connected to app' })
})

// server listening
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
