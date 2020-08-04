const fs = require('fs');
const path = require('path');

const express = require('express');
const router = express.Router();

const places = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'data/places.json'))
);

//request all the places
router.get('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    results: places.length,
    data: {
      places,
    },
  });
});

//request only 1 place..
router.get('/:id', (req, res, next) => {
  //find the place with the id requested
  //the value which came from req.param is a string, and the value we have inside places.json is an int
  const place = places.find((el) => el.id === parseInt(req.params.id));

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
});

router.post('/', (req, res, next) => {
  //generate a new id
  const lastId = places[places.length - 1].id;
  const newId = lastId + 1;

  const newPlace = Object.assign({ id: newId }, req.body);
  places.push(newPlace);

  fs.writeFile(
    path.join(__dirname, '..', 'data/places.json'),
    JSON.stringify(places),
    (err) => {
      //201 stand for creating a new resource
      res.status(201).json({
        status: 'success',
        data: {
          places: newPlace,
        },
      });
    }
  );
});

router.patch('/:id', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      place: `Place ${req.params.id} updated..`,
    },
  });
});

//delete a place
router.delete('/:id', (req, res, next) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

module.exports = router;
