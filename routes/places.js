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

module.exports = router;
