const fs = require('fs');
const path = require('path');

const express = require('express');
const router = express.Router();

const places = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', 'data/places.json'))
);

router.get('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    results: places.length,
    data: {
      places,
    },
  });
});

module.exports = router;
