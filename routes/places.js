const express = require('express');
const router = express.Router();

//import all the functions
const {
  getAllPlaces,
  createPlace,
  getPlace,
  deletePlace,
  updatePlace,
} = require('../controllers/placeController');

router.route('/').get(getAllPlaces).post(createPlace);
router.route('/:id').get(getPlace).delete(deletePlace).patch(updatePlace);

module.exports = router;
