const projects = require('../models/Projects')
const upload = require('../config/uploads')

function create(req, res, next){
    console.log(req.body.title)

    res.json({
        data: req.body
    })
}

function saveImage(req, res) {
    if(req.title){
        
    }
}

function multerMiddleware(){
    return upload.fields({
        name: 'image', maxCount: 1
    })
}

module.exports = {create}