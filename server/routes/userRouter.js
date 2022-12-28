const userRouter = require("express").Router();
const {
  getUser,
  getUsers,
  createUser,
  updateOneUser,
  deleteUsers,
  deleteOneUser,
  forgotPassword
} = require("../controllers/users");

userRouter.route("/login").post(getUser);

userRouter.route("/")
.get(getUsers)
.post(createUser)
.delete(deleteUsers)

userRouter
  .route("/:userId")
  .get(getUser)
  .put(updateOneUser)
  .delete(deleteOneUser);

userRouter.route("/forgotpassword")
  .post(forgotPassword)

module.exports = userRouter;
