const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: true,
        required: [true, 'Please provide a user name'],
        maxLength: [12, 'User name cannot exceed 12 characters']
    },
    password:{
        type: String,
        required: [true, 'please provide a password'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide an email address']
    },
    firstName: {
        type: String,
        required: [true, 'Please provide a first name']
    },
    lastName: {
        type: String,
        required: [true, 'please provide a last name']
    },
    gender:{
        type: String,
        required: [true, 'please select your gender'],
        enum: [ 
                'Male', 
                'Female', 
                'Non-Binary', 
                'Other',
                'prefer not to answer', 
            ]
    },
    profileImage: {
        type: String,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('User', UserSchema);