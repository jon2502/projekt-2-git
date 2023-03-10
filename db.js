const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://127.0.0.1:27017/quiz", { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () =>{ console.log('connected to mongoDB')})

module.exports = db