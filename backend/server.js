// import express package
const express = require('express')

// instantiate express application
const app = express()

// listen for requests
app.listen(4000, () => {
  console.log('listening on port 4000!!!')
})
