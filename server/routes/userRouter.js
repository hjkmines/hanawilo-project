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

userRouter
  .route("/:users")
  .get(getUser)
  .get(getUsers)
  .post(createUser)
  .put(updateOneUser)
  .delete(deleteUsers)
  .delete(deleteOneUser);

module.exports = userRouter;
