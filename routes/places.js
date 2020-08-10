const express = require('express');

const router = express.Router();

//import all the functions
const {
  getAllPlaces,
  createPlace,
  getPlace,
  deletePlace,
  updatePlace,
  getPlacesStats,
} = require('../controllers/placeController');

// create a checkBody Middleware
// check if body contains the name and price property
// If not, send back 400 (bad request)
// Add it to the post handler stack

router.route('/places-stats').get(getPlacesStats);

router.route('/').get(getAllPlaces).post(createPlace);
router.route('/:id').get(getPlace).delete(deletePlace).patch(updatePlace);

module.exports = router;
