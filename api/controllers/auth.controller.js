const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
const userModel = require('../models/user.model.js')


module.exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === '' ||
    email === '' ||
    password === ''
  ) {
    return res.json({ message: 'All fields are required' })
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
    res.status(500).json(error.message)
  }
}