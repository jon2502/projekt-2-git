const route = require('express').Router()

route.get('/delete', (req, res)=>{
    res.render('quiz/delete')
})

module.exports = route