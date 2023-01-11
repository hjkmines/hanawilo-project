const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const dotenv = require("dotenv");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

dotenv.config({ path: "./config/config.env" });
const SECRET_KEY = process.env.SECRET_KEY;

exports.local = passport.use(new LocalStrategy(User.authenticate()));
//necessary for session + cookies - do we need this here? 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



exports.getToken = (user) => {
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
            user.findOne({_id: jwt_payload._id}, (err, user) => {
                if (err) {
                    return done(err, false);
                } else if (user) {
                    return done(null, user);
                } else {
                  //setup prompt to create new user? //
                    return done(null, false);
                }
            });
        }
    )
);

exports.verifyUser = passport.authenticate('jwt', {session: false});


// require("dotenv").config();

// const authenticate = async (req, res, next) => {
//   if (!req.headers.authorization) {
//     return res
//       .status(400)
//       .json( "authorization token was not provided" );
//   }
//   if (!req.headers.authorization.startsWith("Bearer ")) {
//     return res.status(400).json("authorization token was not provided or was not valid");
//   }
//   const token = req.headers.authorization.split(" ")[1];
//   let user;
//   try {
//     user = await verifyToken(token);
//   } catch (err) {
//     return res.status(400).send({
//       message: "authorization token was not provided or was not valid",
//     });
//   }
//   req.user = user.user;
//   next();
// };

// const verifyToken = (token) => {
//   return new Promise((res, rej) => {
//     jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, user) {
//       if (err) return rej();
//       return res(user);
//     });
//   });
// };
// module.exports = authenticate;