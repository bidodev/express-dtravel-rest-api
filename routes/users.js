const express = require('express');

const router = express.Router();

//import our functions
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const { signup } = require('../controllers/authController');

//auth route
router.route('/signup').post(signup);

//users route
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
