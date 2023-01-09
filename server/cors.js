const cors = require('cors');

const whitelist = [
    'http://localhost:3000', 
    'http://localhost:3001', 
    'https://localhost:4040', 
    'http://localhost:5000', 
    'http://localhost:5001'
];

const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);