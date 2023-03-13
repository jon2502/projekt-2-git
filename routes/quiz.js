const route = require('express').Router()
const User = require('../models/user')

route.get('/', (req, res)=>{
    res.render('quiz/index')
})

route.get('/quiz1', (req, res)=>{
    res.render('quiz/quiz1')
})

route.get('/delete', (req, res)=>{
    res.render('quiz/delete')
})

module.exports = route