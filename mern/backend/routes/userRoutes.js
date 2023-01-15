const express = require('express')
const { login, signup } = require('../controllers/userController')

const router = express.Router()

router.get('/login', login)
router.get('/signup', signup)

module.exports = router
