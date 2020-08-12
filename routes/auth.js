const express = require('express');

const router = express.Router();

const { signup } = require('../controllers/authController');

router.route('/').post(signup);

module.exports = router;
