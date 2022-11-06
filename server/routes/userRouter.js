const userRouter = require('express').Router();
const {getUser, updateUser, deleteUser} = require('../controllers/users');

userRouter.route('/login').post(getUser);

userRouter.route('/:users')
.get(getUsers)
.put(updateUser)
.delete(deleteUsers);

module.exports = userRouter;