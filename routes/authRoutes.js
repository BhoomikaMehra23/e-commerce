const express =  require('express');
const User = require('../models/User');
const passport = require('passport')

const router = express.Router();

router.get('/register' , (req,res)=>{
    res.render('auth/signup');
})

router.post('/register' ,async (req,res)=>{
    let {username , password, age,adhaarnumber,gender,address} = req.body;

    let newuser = new User({username , age,adhaarnumber,gender,address});
    let nayabanda = await User.register(newuser , password)
    console.log(nayabanda)
    res.send('Resgistered');
})

router.get('/login' , (req,res)=>{
    res.render('auth/login')
})

router.post('/login', 
  passport.authenticate('local', 
  { 
    failureRedirect: '/login' 
  }),
  function(req, res) {
    console.log(req.user , "new")
    res.redirect('/products');
  }
);

module.exports = router;