const User = require('../models/user');

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.statusCode(200)
            .setHeader('Content-Type', 'application/json')
            .json(users);

    } catch (err) {
        console.log('Error getting users');
        next(err);
    }
}

const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.statusCode(200)
            .setHeader('Content-Type', 'application/json')
            .json(user);

    } catch (err) {
        console.log('Error creating user');
        next(err);
    }
}

const deleteUsers = async (req, res, next) => {
    try {
        const response = await User.deleteMany();
        res.statusCode(200)
            .setHeader('Content-Type', 'application/json')
            .json(response);

    } catch (err) {
        console.log('Error deleting users');
        next(err);
    }
}

// Create Controller file for get, update and delte one user Joe and James

//get one user
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

//deleteOne user
const deleteOneUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.status(200).setHeader("Content-Tyoe", "application/json").json();
  } catch {
    res.status(404).send(`Can't delete user data, ${err.message}`);
    next(err);
  }
};


// Exports
module.exports = {
    getUsers,
    createUser,
    deleteUsers,
    getOneuser,
  updateOneUser,
  deleteOneUser
}




