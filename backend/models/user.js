const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId : { type : String },
    name : { type : String, required : true },
    email : { type : String, required : true, unique : true },
    password : { type : String },
    token : { type : String, default : null }
});

module.exports = mongoose.model('user', userSchema);