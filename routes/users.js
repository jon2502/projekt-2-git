// All user gets posts Deletes goes here
const route = require('express').Router()
const session = require('express-session');
const User = require('../models/user')
require('../db')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieJwtAuth = require('../middleware/cookieJwtAuth')
const sessionChecker = require('../middleware/session');
const { db } = require('../models/user');

route.get('/', cookieJwtAuth, async(req, res)=>{
    const foundUser = await User.findOne({username: req.user.username})
    if(!foundUser){
        res.sendStatus(403)
        res.redirect('/users/login')
        next()
    }else{
        res.render('users/index', {user: req.user})
    }
})
route.get('/logout', (req, res)=>{
    res.clearCookie("token");
    res.redirect('/')
})

route.get('/register', (req, res)=>{
    res.render('users/register', {user: new User()})
})
// this handles when there is register post request
route.post('/register', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    })
    user.save((err) =>{
        if(err) {
            res.render('users/register', {
                user: user,
                errorMessage: "Error creating username, try another user"
            })
        } else {
            res.redirect('/users/login')
        }
    })
})
route.get('/login', (req, res)=>{
    res.render('users/login')
})

// this handles when there is login post request
route.post('/login', async (req, res)=>{
    // When users try to login
    let findUser = {
        username: req.body.username,
        password: req.body.password
    }
    try {
        const foundUser = await User.findOne({username:findUser.username})
        if(foundUser !== null){
            //Compare password:
            const validPass = await bcrypt.compare(findUser.password, foundUser.password)
            if(validPass){
                // Code to run valid pass, Create acces token
                const user = {
                    username: foundUser.username
                }
                const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" })
                res.cookie("token", token, {
                    httpOnly: true
                })
                res.redirect('/todos')
            }else{
                // Wrong password
                res.render('users/login', {user:findUser, errorMessage:"Wrong password!"})
            }
        }else{
            // User not found with that username
            res.render('users/login', {user:findUser, errorMessage:"User not found!"})
        }
    } catch(err) {
        res.render('users/login', {user: findUser, errorMessage: err})
    }
})

route.delete('/delete', async (req, res)=>{
    const deleteUser = {
        email: req.body.email
    }
    try{
        const findEmail = await User.findOne({email:deleteUser.email})
        if(findEmail !== null){
            const validateIndput = await compare(deleteUser.email, findEmail.email)
            if(validateIndput){
                db.collection("users").deleteOne(deleteUser, function(err, obj){
                    if (err) throw err;
                    console.log("1 document deleted");
                    res.redirect('/')
                })
            }
        }
    }catch(err) {
        
    }
})

module.exports = route