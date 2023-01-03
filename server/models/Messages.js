const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message: {
        type: String,
        required: [true, "Enter a message"],
        unique: false
    },
    userName: {
        type: String,
        unique: true
    }
}, {
    timestamps: true,
})