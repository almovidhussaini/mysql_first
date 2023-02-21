const PictureModel = require('../../models').Pictures;
const multer = require('multer');
const path = require('path');
var fs = require('fs');

const UpLoadPicture = async (req, res) =>{

    try{
        // const savePicture = await PictureModel.Create( )
        // const image = req;
        // const storage = multer.diskStorage({
            // destination : '../../pictures',
        //     destination: function (req, file, callback) {
        //         fs.mkdir('../../pictures', function(err){
        //             if(err){
        //                 console.log(err.stack)
        //             }
        //             else{
        //                 console.log('working')
        //               callback(null, '../../pictures');
        //             }
        //         })
        //     },
        //     filename: function (req, file, callback){
        //         console.log(file,'file inside storage');
        //      callback(null, file.fieldname + '-' + Date.now());
        //     }
        //   });
        
        //   const limits = {
        //     fileSize : 4000000
        // }
        
        // const fileFilter = (req, file, cb) => {
        //     if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        //         return cb(new Error('File must be of type JPG, JPEG, or PNG and nore more than 2MB in size'))
        //     }
        //     cb(undefined, true)
        //   }
        //   const upload = multer({
        //     storage: storage,
        //   }).single('husky-3380548_960_720.jpg')
        //   res.send({
        //     image: req.file,
        //     message: 'myMessage'
        //   } )
        //   console.log(req.file)

        const imgPath = `./pictures/${req.body.url}`
        const saveImage = await PictureModel.create({
            path: imgPath
        })
        res.send({
            success: true,
            message: 'message Updated'
        })

    }
    catch(err){
        res.status(500).send({
            result:"error",
            message: err.message});
    }
}

module.exports = {
    UpLoadPicture
}