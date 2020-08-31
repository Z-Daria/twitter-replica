const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {type: String, required: true, index: { unique: true }},
    password: {type: String, required: true}
});

const User = mongoose.model('User', UserSchema, 'users');

module.exports = User;