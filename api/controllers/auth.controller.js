const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
const userModel = require('../models/user.model.js');
const { errorHandler } = require('../utils/error.js');


module.exports.signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    next(errorHandler(400, 'All fields are required'));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new userModel({
    username,
    email,
    password: hashedPassword
  });

  try {
    await newUser.save();
    res.status(200).json('Signup successful');
  } catch (error) {
    next(error);
  }
}