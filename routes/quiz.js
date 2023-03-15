const route = require('express').Router()
const User = require('../models/user')
const Score = require('../models/score')
require('../db')

route.get('/', (req, res)=>{
    res.render('quiz/index')
})

route.get('/quiz1', (req, res)=>{
    res.render('quiz/quiz1')
})

route.get('/delete', (req, res)=>{
    res.render('quiz/delete')
})

route.post('/postresult', async(req, res)=>{
    const findUser = await User.findOne({username: req.user.username})
    if(findUser){
        const score = new Score({
            score: req.body.score,
            user: findUser
        })
        console.log(score)
        const newScore = await score.save()
        if(newScore){
            res.redirect('/')
        } else {
            res.render('quiz/quiz1', {errorMessage: newScore, score, user:req.user})
        }
    }
})


module.exports = route