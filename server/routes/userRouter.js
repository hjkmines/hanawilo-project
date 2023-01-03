const userRouter = require("express").Router();

const {
  getUser,
  getUsers,
  createUser,
  updateOneUser,
  deleteUsers,
  deleteOneUser,
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

module.exports = userRouter;
