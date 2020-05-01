const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    "nickname": String,
    "startAmount": Number,
    "totalAmount": Number
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);