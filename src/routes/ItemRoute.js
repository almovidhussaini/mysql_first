const ItemController = require('../controllers/ItemController')
// const UserPermMiddleware = require('../middlewares/UserPerMiddleware')
const JwtAuthMiddleware = require('../middlewares/JwtAuthMiddleware')

const router = require('express').Router()

// router.post('' , UserPermMiddleware.UserPermission , ItemController.addItem)
router.get('' ,JwtAuthMiddleware.JwtAuthMiddleware , ItemController.allItem)
router.delete('/:id' , JwtAuthMiddleware.JwtAuthMiddleware , ItemController.deleteItems)
router.put('/:id' , JwtAuthMiddleware.JwtAuthMiddleware ,  ItemController.updateItem)
router.get('/:id' , JwtAuthMiddleware.JwtAuthMiddleware, ItemController.getItem)

module.exports = router