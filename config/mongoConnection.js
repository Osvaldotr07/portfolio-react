const mongoose = require('mongoose')
const dbName = 'portfolio_osvaldo'

module.exports = {
    connect: () => mongoose.connect('mongodb://localhost:27017' + dbName, {useNewUrlParser: true }),
    dbName, 
    connection: () => {
        if(mongoose.connection) return mongoose.connection

        return this.connect()
    }
}