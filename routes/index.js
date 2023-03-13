const router = require('express').Router()
const authorize = require('../middleware/authorize')


router.get('/', authorize, (req, res) => {
    console.log('User logged out');
    req.session.destroy(function(err) {
        console.log('Destroyed session')
     })
    res.render('index', { title:"Todoapp"} ) 
})
 
module.exports = router