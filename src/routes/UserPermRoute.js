const UserPer = require('../controllers/UserPermisionController')
const router = require('express').Router()

router.post('/', UserPer.createUserPermission)
module.exports = router