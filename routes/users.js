const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const bcrypt = require('bcryptjs');
const loginInfo = require('./schema');
const passport = require('passport');

// Login Page
router.get('/login', (req, res) => res.render('login', { expressFlash: req.flash('success'), errorFlash: req.flash('error') }));
router.post('/login', (req, res, next) => {
    const type = req.body.type;
    if (type == "Student") {
        passport.authenticate('local', {
            successRedirect: '/profile/student',
            failureRedirect: '/users/login',
            failureFlash: true
        })(req, res, next);
    }
    else if (type == "Teacher") {
        passport.authenticate('local', {
            successRedirect: '/profile/teacher',
            failureRedirect: '/users/login',
            failureFlash: true
        })(req, res, next);
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('error', 'You are Logged Out');
    res.redirect('/users/login');
});

//Register Page
router.get('/register', (req, res) => res.status(200).render('register'));
router.post('/register', (req, res) => {
    const { name, email, skill, phone, college, password, password2, type } = req.body;
    let msg = "";
    if (!name || !email || !skill || !phone || !college || !password || !password2 || !type) {
        msg = "Please Fill in all Fields.";
    }
    if (password != password2) {
        msg = "Passwords do not Match";
    }
    if (password.length < 6) {
        msg = "Password should be at least 6 or more Characters.";
    }
    if (msg.length > 0) {
        res.render('error.pug', { msg });
    }
    else {
        var myData = new loginInfo(req.body);
        loginInfo.findOne({ email: email })
            .then(myData => {
                if (myData) {
                    msg = "Your Email already Exists";
                    res.render('error.pug', { msg });
                }
                else {
                    const newloginInfo = new loginInfo({ name, email, skill, phone, college, password, type });
                    bcrypt.genSalt(10, (err, salt) =>
                        bcrypt.hash(newloginInfo.password, salt, (err, hash) => {
                            if (err) 
                                throw err;
                            newloginInfo.password = hash;
                            newloginInfo.save().then(() => {
                                req.flash('success', 'Your Account has been Created!');
                                res.redirect('/users/login');
                            }).catch((err) => {
                                msg = "Your Account is not Yet Created! Please Try Again"
                                res.status(400).render("error.pug", { msg });
                            });
                        })
                    );
                }
            });
    }
});

module.exports = router;