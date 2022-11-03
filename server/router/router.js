const router = require('express').Router();
const {getUsers} = require('../controllers/users');
const {getUser, updateUser, deleteUser} = require('../controllers/userId');

router.post('/login', getUsers);

router.get('/:userId', getUser);

router.put('/:userId', updateUser);

router.delete('/:userId', deleteUser);

module.exports = router;