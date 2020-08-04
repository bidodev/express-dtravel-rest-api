const express = require('express');
const router = express.Router();

/* GET users listing. */
const getAllUsers = (req, res, next) => {
  res.status(200).json({ status: "success", method: 'GET' });
};

const createUser = (req, res, next) => {
  //201 stand for creating a new resource
  res.status(201).json({ status: "success", method: 'POST' });
};

//users route
router.route('/').get(getAllUsers).post(createUser);

module.exports = router;
