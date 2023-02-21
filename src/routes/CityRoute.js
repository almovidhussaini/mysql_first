const CityController = require('../controllers/CityController');
const router = require('express').Router();

router.post('', CityController.addCity)

module.exports = router