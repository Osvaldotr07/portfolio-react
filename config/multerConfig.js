const multer = require('multer')

var storage = multer.diskStorage({
    destination: function(req, file, cb ){
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
            cb(null, '.files/uploads/')
        }
        else {
            cb({message: 'this file is not a image'}, false)
        }
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

var uploads = multer({storage})

module.exports = uploads