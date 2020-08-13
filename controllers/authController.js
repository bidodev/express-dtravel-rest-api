const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const AppError = require('../utils/appError.js');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    const token = signToken(newUser._id);

    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    return next(new AppError(`${err.message}`, 404, 'fail'));
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  //1. check if email and password exist.
  if (!email || !password) {
    return next(new AppError(`Please provide email and password`, 400, 'fail'));
  }

  //2. check if the user exist and password is correct
  const user = await User.findOne({ email });
  const correct = await user.correctPassword(password);

  //3. if no user or password is incorrect, return from this function
  if (!user || !correct) {
    return next(new AppError(`Credentials don't match`, 401, 'fail'));
  }

  //4. If everything is okay send token to client
  const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    token,
  });
};
