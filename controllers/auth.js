const register = async (req, res) => {
  res.send('register new user')
}

const login = async (req, res) => {
  res.send('login existent user')
}

module.exports = { register, login }
