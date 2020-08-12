/**
 * Module dependencies.
 */
const mongoose = require('mongoose');

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
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
  },
  passwordConfirm: {
    type: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
