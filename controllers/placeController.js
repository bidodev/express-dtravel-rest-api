const Place = require('../models/placeModel');

//midlewares
exports.checkBody = (req, res, next) => {
  if (!req.body.productName) {
    return res
      .status(400)
      .json({ status: 'fail', message: 'Missing product name' });
  }
  next();
};

//request all the places
exports.getAllPlaces = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    results: places.length,
    data: {
      places,
    },
  });
};

//create a new place..
exports.createPlace = (req, res, next) => {
  //generate a new id
  const lastId = places[places.length - 1].id;
  const newId = lastId + 1;
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  const newPlace = { id: newId, ...req.body };
  places.push(newPlace);
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
