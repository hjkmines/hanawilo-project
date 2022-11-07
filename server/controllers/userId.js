const User = require("../models/user");

// Create Controller file for get, update and delte one user Joe and James

//get one user
const getOneuser = async (req, res, next) => {
  try {
    const oneUser = await User.findById(req.params.userId);
    res.status(200).setHeader("Content-type", "application/json").json(oneUser);
  } catch (err) {
    res.status(404).send(`Can't get user data, ${err.message}`);
    next(err);
  }
};

const updateOneUser = async (req, res, next) => {
  try {
    const oneUpdate = await User.findByIdAndUpdate(
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
module.exports = {
  getOneuser,
  updateOneUser,
  deleteOneUser,
};
