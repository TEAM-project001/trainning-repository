var express = require('express');
var router = express.Router();
var mongoose  = require('mongoose');
var User = require('../models/Users')

router.get('/', function (req, res) {
    res.render('index', { title: "home" });
});
router.post('/signup', function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.password2;

    req.checkBody('username','Name is required').notEmpty();
    req.checkBody('email','email is required').notEmpty();
    req.checkBody('email','email is required').isEmail();
    req.checkBody('password','password is required').notEmpty();
    req.checkBody('password2','password not match').matches(req.body.password);
    
    //errors
    var errors = req.validationErrors();
    if(errors){
        res.render('index',{errors:errors})
    }else{
        var newUser = new user ({
            name: name,
            email: email,
            password: password
        });
        username.createUser(newUser,function(){
            if(err,user) throw err;
            console.log(user);
        });
        res.location('/');
        res.redirect('/');
    }
});


module.exports = router;
