// import express packages
require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT
// instantiate express application
const app = express()

// route handlers
app.get('/', (req, res) => {
  res.json({ message: 'welcome to the app' })
})

// listen for requests
app.listen(PORT, () => {
  console.log('listening on port 4000!!!')
})
