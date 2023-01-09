const userRouter = require("express").Router();
const passport = require('passport');

const {
  getUsers,
  createUser,
  getOneUser,
  updateOneUser,
  deleteUsers,
  deleteOneUser,
  loginUser
} = require("../controllers/users");

userRouter.route("/login").post(passport.authenticate('local'), loginUser);
userRouter.route("/register").post(createUser);

userRouter.route("/")
.get(getUsers)
.post(createUser)
.delete(deleteUsers)

userRouter
  .route("/:userId")
  .get(getOneUser)
  .put(updateOneUser)
  .delete(deleteOneUser);

module.exports = userRouter;


