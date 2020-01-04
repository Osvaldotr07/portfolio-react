const mongoose = require('mongoose')
const uploader = require('./Uploader')


let projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: String,
    url: String
})

projectSchema.method.updateImage = function(path){
    uploader(path).then(secure_url => this.coverImage = secure_url)
}

let Project = mongoose.model('Project', projectSchema)

module.exports = Project