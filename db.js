const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://localhost:27017/todobd", { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () =>{ console.log('connected to mongoDB')})

module.exports = db