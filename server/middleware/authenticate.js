
const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;
const dotenv = require("dotenv");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

dotenv.config({ path: "./config/config.env" });

const SECRET_KEY = process.env.SECRET_KEY;

exports.getToken = function(user) {
    return jwt.sign(user, SECRET_KEY, {expiresIn: 3600});
};

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET_KEY;

exports.jwtPassport = passport.use(
    new JwtStrategy(
        opts,
        (jwt_payload, done) => {
            console.log('JWT payload:', jwt_payload);
            console.log('Login successful')
            User.findOne({_id: jwt_payload._id}, (err, user) => {
                if (err) {
                    return done(err, false);
                } else if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        }
    )
);

exports.verifyUser = passport.authenticate('jwt', {session: false});