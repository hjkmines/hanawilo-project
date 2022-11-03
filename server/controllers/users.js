const User = require('../models/user');

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.statusCode(200)
            .setHeader('Content-Type', 'application/json')
            .json(users);

    } catch (err) {
        console.log('Error getting users');
        next(err);
    }
}

const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.statusCode(200)
            .setHeader('Content-Type', 'application/json')
            .json(user);

    } catch (err) {
        console.log('Error creating user');
        next(err);
    }
}

const deleteUsers = async (req, res, next) => {
    try {
        const response = await User.deleteMany();
        res.statusCode(200)
            .setHeader('Content-Type', 'application/json')
            .json(response);

    } catch (err) {
        console.log('Error deleting users');
        next(err);
    }
}

// Exports
module.exports = {
    getUsers,
    createUser,
    deleteUsers
}




