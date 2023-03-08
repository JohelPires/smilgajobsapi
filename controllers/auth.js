// const mongoose = require('mongoose')
const User = require('../models/User')

// Register:
// - validate name, email, password - with mongoose
// - hash password - with bcrypt
// - Create token
// - Send response with token

const register = async (req, res) => {
  res.json(req.body)
}

const login = async (req, res) => {
  res.send('login existent user')
}

module.exports = { register, login }
