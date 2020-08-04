const express = require('express');
const router = express.Router();

//import all the functions
const {
  checkBody,
  getAllPlaces,
  createPlace,
  getPlace,
  deletePlace,
  updatePlace,
} = require('../controllers/placeController');

// create a checkBody Middleware
// check if body contains the name and price property
// If not, send back 400 (bad request)
// Add it to the post handler stack

router.route('/').get(getAllPlaces).post(checkBody, createPlace);
router.route('/:id').get(getPlace).delete(deletePlace).patch(updatePlace);

module.exports = router;
