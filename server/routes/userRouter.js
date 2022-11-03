const userRouter = require('express').Router();
const {getUser, updateUser, deleteUser} = require('../controllers/userId');

userRouter.route('/login').post(getUser);

userRouter.route('/:userId')
.get(getUser)
.put(updateUser)
.delete(deleteUser);

module.exports = userRouter;