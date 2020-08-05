const Place = require('../models/placeModel');

//query for all the places
exports.getAllPlaces = async (req, res) => {
  try {
    const places = await Place.find();

    res.status(200).json({
      status: 'success',
      results: places.length,
      data: {
        places,
      },
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

//create a new place..
exports.createPlace = async (req, res) => {
  try {
    const newPlace = await Place.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        place: newPlace,
      },
    });
  } catch (err) {
    res.status(404).json({ status: 'fail', message: err.message });
  }
};

//request only 1 place..
exports.getPlace = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        place,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

//update a place
exports.updatePlace = async (req, res) => {
  try {
    const place = await Place.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        place,
      },
    });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

//delete a place
exports.deletePlace = async (req, res) => {
  try {
    await Place.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      data: err.message,
    });
  }
};
