const express = require('express');
const app = express();

app.use('/user/:id', (req, res, next) => {
    console.log('Request URL: ' + req.originalUrl)
    next();
}, (req, res, next) => {
    console.log('Request Type:', req.method)
    next(); 
});


