const UpLoadPicture = require('../controllers/PictureUploadController');
const router = require('express').Router()

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : '../../pictures',
    filename: ( req, file, cb ) => {

        console.log(file,'file inside storage');
     return  cb(null,`${file.filename}+'-'+${Date.now()+path.extname(file.originalname)}`)
    }
  });

  const limits = {
    fileSize : 4000000
}

const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        return cb(new Error('File must be of type JPG, JPEG, or PNG and nore more than 2MB in size'))
    }
    cb(undefined, true)
  }

  const upload = multer({
    storage: storage,
    limits: limits,
    fileFilter: fileFilter
  })

  router.post('' ,  UpLoadPicture.UpLoadPicture)

module.exports = router

