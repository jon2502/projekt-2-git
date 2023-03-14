const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
    score: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})
module.exports = mongoose.model('score', scoreSchema)