const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

let userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true},
  email: { type: String, unique: true, required: true},
  
  password: String,
  avatar: String,
  firstName: String,
  lastName: String,
  
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  
  isAdmin: {type: Boolean, default: false}
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);