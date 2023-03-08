// const mongoose = require('mongoose')
const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')

// Register:
// - validate name, email, password - with mongoose
// - hash password - with bcrypt
// - Create token
// - Send response with token

const register = async (req, res) => {
  const { name, email, password } = req.body
  //   if (!name || !email || !password) {
  //     throw new BadRequestError('Informe nome, email e senha válidos.')
  //   }
  const user = await User.create({ ...req.body })
  res.status(StatusCodes.CREATED).json({ user })
}

const login = async (req, res) => {
  res.send('login existent user')
}

module.exports = { register, login }
