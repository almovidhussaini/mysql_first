const MovieController = require('../controllers/MovieController');
const router = require('express').Router()

router.post('' , MovieController.addMovie)
router.get('' , MovieController.getMovies)

module.exports = router