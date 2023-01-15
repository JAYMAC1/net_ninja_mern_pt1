const login = (req, res) => {
  res.status(200).json({ msg: 'login user (controller)' })
}
const signup = (req, res) => {
  res.status(200).json({ msg: 'Signup a new user (controller)' })
}
module.exports = {
  login,
  signup,
}
