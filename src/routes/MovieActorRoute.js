const MovieActorController = require('../controllers/MovieActorController');
const router = require('express').Router()

router.post('/add', MovieActorController.addMovAct)

module.exports = router