const express = require('express')
const { login } = require('../controllers/userController')

const router = express.Router()

router.get('/login', login)

module.exports = router
