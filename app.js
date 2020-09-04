const express = require("express");
const path = require("path");
const passport = require('passport');
const app = express();
var session = require('express-session');
var flash = require('connect-flash');
const PORT = process.env.PORT || 5000;
const { ensureAuthenticated, forwardAuthenticated } = require('./routes/auth');
require('./routes/passport')(passport);

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: false }));

app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', forwardAuthenticated, (req, res) => res.render('welcome.pug'));
app.use('/users', require('./routes/users'));
app.use('/profile', ensureAuthenticated, require('./routes/profile'));

app.listen(PORT, console.log(`Server started on port ${PORT}`));