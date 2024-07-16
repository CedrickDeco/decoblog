const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
const userModel = require('../models/user.model.js');
const { errorHandler } = require('../utils/error.js');
const jwt = require('jsonwebtoken')



const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  })
};





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

module.exports.signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, 'All fields are required'));
  }

  try {
    const validUser = await userModel.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'));
    }

    const token = createToken(userModel._id)

    // const token = jwt.sign(
    //   { id: validUser._id, isAdmin: validUser.isAdmin },
    //   process.env.JWT_SECRET
    // );

    const { password: pass, ...rest } = validUser._doc; // cette ligne permet d'enlever le password dans le resultat rendu

    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
        maxAge
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};