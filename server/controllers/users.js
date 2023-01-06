const User = require('../models/user');
const passport = require('passport');
const { authenticate } = require('passport');

const loginUser = async (req, res) => {
  passport.authenticate('local');
  const token = authenticate.getToken({_id: req.user._id});
  res.status(200)
    .setHeader('Content-Type', 'application/json')
    .json({ success: true, status: 'You are successfully logged in!' });
}

const getUsers = async (req, res, next) => {
  try {
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

const createUser = async (req, res) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    err => {
      if (err) {
        res.status(500)
          .setHeader('Content-Type', 'application/json')
          .json({ err: err });
      } else {
        passport.authenticate('local')(req, res, () => {
          res.status(200)
            .setHeader('Content-Type', 'application/json')
            .json({ success: true, status: 'Registration Successful!' });
        });
      }
    }
  );
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

const getOneuser = async (req, res, next) => {
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
  getOneuser,
  updateOneUser,
  deleteOneUser
}




