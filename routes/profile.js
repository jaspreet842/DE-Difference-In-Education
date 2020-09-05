const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const loginInfo = require('./schema');

router.get('/student', (req, res) => {
    const params = { 
        user: req.user.name, 
        skill: req.user.skill, 
        college: req.user.college
    };
    res.render('studentProfile.pug', params)
});
router.get('/teacher', (req, res) => {
    const params = { 
        user: req.user.name,
        skill: req.user.skill,
        college: req.user.college, 
        phone: req.user.phone,
        email: req.user.email,
        expressMessage: req.flash('success') }
    res.render('teacherProfile.pug', params);
});

router.get('/discuss', (req, res) => res.render('discuss.pug'));

router.get('/contest', (req, res) => res.render('contest.pug'));

router.get('/resources', (req, res) => res.render('resources.pug'));

router.get('/organize', (req, res) => res.render('organize.pug'));
router.post('/organize', (req, res) => {
    const { organizer, name, type, data, desc } = req.body;
    var myData = new contest(req.body);
    myData.save().then(() => {
        req.flash('success', 'Your Contest has been Organized!');
        res.redirect('/profile/teacher');
    }).catch((err) => {
        msg = "Your Contest is not Yet Organized! Please Try Again"
        res.status(400).render("cError.pug", { msg });
    }); 
});

router.get('/editProfile', (req, res) => res.render('editProfile.pug', { user: req.user.email }));
router.post('/editProfile', (req, res) => {
    const { n, s, c, p } = req.body;
    loginInfo.findOneAndUpdate({ email: req.user.email }, {
        name: n,
        skill:  req.user.skill+"and"+s,
        phone: p,
        college: c
    }, { new: true});
    res.redirect('/profile/student');
});

router.get('/practice', (req, res) => res.render('practice.pug'));
router.get('/test1', (req, res) => res.render('test1.pug'));
router.get('/test2', (req, res) => res.render('test2.pug'));
router.get('/test3', (req, res) => res.render('test3.pug'));
router.get('/test4', (req, res) => res.render('test4.pug'));
router.get('/test5', (req, res) => res.render('test5.pug'));
router.get('/test6', (req, res) => res.render('test6.pug'));

router.get('/officialTest', (req, res) => res.render('officialTest.pug'));

router.get('/career', (req, res) => res.render('career.pug'));

router.get('/contactUs', (req, res) => res.render('contactUs.pug'));

module.exports = router;