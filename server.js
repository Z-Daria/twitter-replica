const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const mongoose = require('mongoose');
const User = require('./user/User.js');
const Variables = require('./variables.js');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: Variables.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(Variables.URI, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
    if (err) { 
        console.log('Database error: ' + err)
    };
    passport.use(new LocalStrategy(
        function(username, password, done) {
            User.findOne({ email: username }, function(err, user) {
                console.log('User ' + username + ' attempted to log in.');
                if (err) { console.log(err); };
                if (!user) { console.log('no user'); return done(null, false) };
                if (password !== user.password) {
                    return done(null, false);
                };
                return done(null, user);
            })
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser((id, done) => {
        User.findOne({_id: new mongoose.Types.ObjectId(id) }, (err, doc) => {
            done(null, doc);
        })
    });

    function ensureAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/');
        }
    };

    app.get('/', (req, res, next) => {
        res.sendFile(process.cwd() + '/index.html');
    });

    app.post('/login', passport.authenticate('local', { failureRedirect: '/' }), (req, res, next) => {
       res.redirect('/profile');
    });

    app.get('/profile', ensureAuthenticated, (req, res, next) => {
        res.sendFile(process.cwd() + '/public/profile/profile.html');
    });

    app.post('/register', (req, res, next) => {
        User.findOne({ email: req.body.username }, function(err, user) {
            if (err) {
                next(err);
            } else if (user) {
                res.redirect('/');
            } else {
                User.create({ email: req.body.username, password: req.body.password }, (err, user) => {
                    if (err) {
                        res.redirect('/');
                    } else {
                        next(null, user);
                    }
                })
            }
        })
    }, passport.authenticate('local', { failureRedirect: '/' }), (req, res, next) => {
        console.log('hey');
        res.redirect('/profile');
        });

    app.listen(PORT, () => {
        console.log('Listening');
    })
});

