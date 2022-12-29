const userRouter = require("express").Router();
const {
  getOneuser,
  getUsers,
  createUser,
  updateOneUser,
  deleteUsers,
  deleteOneUser,
  forgotPassword
} = require("../controllers/users");

userRouter.route("/login").post(getOneuser);

userRouter.route("/")
.get(getUsers)
.post(createUser)
.delete(deleteUsers)

userRouter
  .route("/:userId")
  .get(getOneuser)
  .put(updateOneUser)
  .delete(deleteOneUser);

userRouter.route("/forgotpassword")
  .post(forgotPassword)

module.exports = userRouter;
