const route = require('express').Router()
const User = require('../models/user')
const Score = require('../models/score')
const score = require('../models/score')
require('../db')

route.get('/', async(req, res)=>{
    const findUser = await User.find({username: req.user.username})
    if(findUser){
        const findScore = await Score.find({user:findUser, score:score})
    if(findScore){
        res.render('quiz/index', {score:score, user:req.user})
    }
}
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