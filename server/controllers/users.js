const User = require('../models/user');
const passport = require('passport');
const  authenticate   = require('../middleware/authenticate');
// const user = require('../models/user');


const loginUser = async (req, res) => {
  passport.authenticate('local');
  const token = authenticate.getToken({_id: req.body._id})
  res.status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ success: true, token: token, status: 'You are successfully logged in!' })
}

const getUsers = async (req, res, next) => {
  try {
    //
    const users = await User.find();
    res
      .status(200)
      .setHeader('Content-Type', 'application/json')
      .json(users);
  } catch (err) {
    console.log('Error getting users');
    next(err);
  }
}

const createUser = async (req, res, next) => {
  console.log('registering user....');
   User.register(
    new User({ 
      username: req.body.username, 
      firstName: req.body.firstName, 
      lastName: req.body.lastName,
      gender: req.body.gender,
      email: req.body.email }),
    req.body.password,
    function(err, user) {
      if (err) {
       console.log('error while registering user!', err);
       return next(err)
      } else {
        // user.save()
        console.log('user registered')
        console.log(user)
          // err => {
          // if (err) {
          //     res.statusCode = 500;
          //     res.setHeader('Content-Type', 'applicatoin/json');
          //     res.json("second error");
          //     return;
          // }
            passport.authenticate('local')(req, res, () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true, status: 'Registration Successful!'});
            });
        }
      }
   )
    }

const deleteUsers = async (req, res, next) => {
  try {
    const response = await User.deleteMany();
    res
      .status(200)
      .setHeader('Content-Type', 'application/json')
      .json(response);
  } catch (err) {
    console.log('Error deleting users');
    next(err);
  }
}

const getOneUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).setHeader("Content-type", "application/json").json(oneUser);
  } catch (err) {
    res.status(404).send(`Can't get user data, ${err.message}`);
    next(err);
  }
};

const updateOneUser = async (req, res, next) => {
  try {
    const userUpdate = await User.findByIdAndUpdate(
      req.params.userId,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(oneUpdate);
  } catch (err) {
    res.status(404).send(`Can't update user data, ${err.message}`);
    next(err);
  }
};

const deleteOneUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).setHeader("Content-Tyoe", "application/json").json();
  } catch {
    res.status(404).send(`Can't delete user data, ${err.message}`);
    next(err);
  }
};


module.exports = {
  loginUser,
  getUsers,
  createUser,
  deleteUsers,
  getOneUser,
  getOneUser,
  updateOneUser,
  deleteOneUser
}




