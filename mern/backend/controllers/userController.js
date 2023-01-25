const User = require('../Models/userModel')

const login = async (req, res) => {
  res.status(200).json({ msg: 'login user (controller)' })
}
const signup = async (req, res) => {
  res.status(200).json({ msg: 'Signup a new user (controller)' })
}
module.exports = {
  login,
  signup,
}
