const Place = require('../models/placeModel');

//query for all the places
exports.getAllPlaces = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludeFields = ['page', 'sort', 'limit', 'fields'];

    excludeFields.forEach((el) => delete queryObj[el]);
    let query = Place.find(queryObj);

    //pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numberPlaces = await Place.countDocuments();
      if (skip >= numberPlaces) throw new Error('This page does not exist.');
    }

    const places = await query;

    //3. Sending the response.
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
