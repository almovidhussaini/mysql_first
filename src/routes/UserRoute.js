const userController = require('../controllers/UserController')
const router = require('express').Router()
const userPermMiddleware = require('../middlewares/UserPerMiddleware')
const JwtAuthMiddleware = require('../middlewares/JwtAuthMiddleware')

router.post('/', userController.addUser)
router.get('', JwtAuthMiddleware.JwtAuthMiddleware , userController.allUsers)
router.delete('/:id',JwtAuthMiddleware.JwtAuthMiddleware  , userController.deleteUser)
router.put('/:id',JwtAuthMiddleware.JwtAuthMiddleware  , userController.updateUser)
router.get('/login',userPermMiddleware.UserPermission , userController.loginUser)
router.post('/authentication', userPermMiddleware.UserPermission  ,  userController.getUsers )

router.get('/image/:id',userController.userImage )

module.exports = router