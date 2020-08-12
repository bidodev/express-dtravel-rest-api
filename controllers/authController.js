const User = require('../models/userModel');
const AppError = require('../utils/appError.js');

exports.signup = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        place: newUser,
      },
    });
  } catch (err) {
    return next(new AppError(`${err.message}`, 404, 'fail'));
  }
};
