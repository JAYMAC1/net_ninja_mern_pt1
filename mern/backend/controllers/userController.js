const login = (req, res) => {
  res.status(200).json({ msg: 'login from controller' })
}
module.exports = {
  login,
}
