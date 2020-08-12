/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const validator = require('validator');

//name, email, photo, password, passwordConfirm

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ['true', 'The name is required'],
    unique: true,
  },
  email: {
    type: String,
    required: ['true', 'The email is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please use a valid email'],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: ['true', 'Please provide a password'],
    minlength: 10,
  },
  passwordConfirm: {
    type: String,
    required: ['true', 'Please provide a password'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
