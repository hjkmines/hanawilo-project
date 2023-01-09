const userRouter = require("express").Router();
const {
  getOneUser,
  getUsers,
  createUser,
  updateOneUser,
  deleteUsers,
  deleteOneUser,
  loginUser
} = require("../controllers/users");
const cors = require('../cors');
// const { authenticate } = require("../models/user");

userRouter.route("/")
.get(cors.cors, getUsers)
.post(cors.corsWithOptions, createUser)
.delete(cors.corsWithOptions, deleteUsers)

userRouter.route("/login").post( cors.corsWithOptions, loginUser);

userRouter.route("/register").post(cors.corsWithOptions, createUser);

userRouter
  .route("/:userId")
  .get(getOneUser)
  .put(updateOneUser)
  .delete(deleteOneUser);

module.exports = userRouter;


