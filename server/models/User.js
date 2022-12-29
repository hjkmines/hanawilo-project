const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require('crypto');

const RatingSchema = new Schema({
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
      validate: (rating) => {
        return typeof rating === "number";
      },
    },
    text: {
      type: String,
      required: true,
    },
    tutor: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "User",
    },
  }, {
    timestamps: true
  });

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: [true, "Please provide a user name"],
      maxLength: [12, "User name cannot exceed 12 characters"],
    },
    password: {
      type: String,
      required: [true, "please provide a password"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide an email address"],
    },
    firstName: {
      type: String,
      required: [true, "Please provide a first name"],
    },
    lastName: {
      type: String,
      required: [true, "please provide a last name"],
    },
    gender: {
      type: String,
      required: [true, "please select your gender"],
      enum: ["Male", "Female", "Non-Binary", "Other", "prefer not to answer"],
    },
    profileImage: {
      type: String,
    },
    ratings: [RatingSchema]
  }, {
    timestamps: true,
  }
);


//hash reset password token
UserSchema.methods.getResetPasswordToken = function() {
  const resetToken = crypto.randomBytes(20).toString('hex');

  this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex'); 

  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000; 

  return resetToken; 
}


module.exports = mongoose.model("User", UserSchema);
