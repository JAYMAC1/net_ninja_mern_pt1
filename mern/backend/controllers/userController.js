const User = require('../Models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

// user login
const login = async (req, res) => {
  res.status(200).json({ msg: 'login user (controller)' })
}

// user signup
const signup = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.signup(email, password)
    res.status(200).json({ email, user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
module.exports = {
  login,
  signup,
}
