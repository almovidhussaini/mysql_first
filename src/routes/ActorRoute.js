const ActorController = require('../controllers/ActorController');
const router = require('express').Router();

router.post('',ActorController.addActor)
router.get('/',ActorController.getActers)

module.exports = router