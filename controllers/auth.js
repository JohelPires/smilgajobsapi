// const mongoose = require('mongoose')
const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')
// const jwt = require('jsonwebtoken')

// Register:
// - validate name, email, password - with mongoose
// - hash password - with bcrypt
// - Create token
// - Send response with token

const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  const token = user.createJWT()
  // movendo esse codigo para um method do UserSchema:
  // const token = jwt.sign({ userId: user._id, name: user.name }, 'jwtSecret', {
  //   expiresIn: '30d',
  // })
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Por favor informe email e senha')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Usuário não encontrado')
  }
  // compare password
  const isPasswordCorrect = await user.comparePassword(password)

  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Senha inválida.')
  }
  const token = user.createJWT()
  res.json({ name: user.name, msg: 'login successful', token })
}

module.exports = { register, login }
