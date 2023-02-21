const StudentController = require('../controllers/StudentController');
const router = require('express').Router()

router.post('', StudentController.AddStudent)
router.get('/innerjoin', StudentController.StudentInnerJoin)

module.exports = router
