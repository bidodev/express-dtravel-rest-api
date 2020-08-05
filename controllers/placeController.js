const Place = require('../models/placeModel');

//request all the places
exports.getAllPlaces = async (req, res) => {
  const places = await Place.find();

  res.status(200).json({
    status: 'success',
    results: places.length,
    data: {
      places,
    },
  });
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
    res.status(400).json({ status: 'fail', message: err.message });
  }
};

//request only 1 place..
exports.getPlace = (req, res, next) => {
  //find the place with the id requested
  //the value which came from req.param is a string, and the value we have inside places.json is an int
  const place = places.find((el) => el.id === Number(req.params.id));

  //if place not found return status 404 (not found)
  if (!place) {
    return res.status(404).json({
      status: 'fail',
      message: 'The given id could not be found',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      place,
    },
  });
};

//update a place
exports.updatePlace = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      place: `Place ${req.params.id} updated..`,
    },
  });
};

//delete a place
exports.deletePlace = (req, res, next) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
