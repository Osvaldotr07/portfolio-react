const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name: 'dpjujzbkc',
    api_key: 399459574941833,
    API_secret: '8FGcDciLxMDeVuJFSEH2XfjwKZE'
})

exports.uploads = (file ) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({url: result.url, id: result.public_id})
        }, {resource_type: 'auto'})
    })
}

