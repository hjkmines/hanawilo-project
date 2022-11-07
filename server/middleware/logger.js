const express = require('express');
const app = express();

const logger = app.use('/user/:id', (req, res, next) => {
    console.log('Request Type:', req.method, 'Request URL: ' + req.originalUrl)
    next();
});

module.exports = logger;