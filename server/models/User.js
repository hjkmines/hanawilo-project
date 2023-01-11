const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
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
    gender: {
        type: String,
        // required: [true, 'please select your gender'],
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

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);