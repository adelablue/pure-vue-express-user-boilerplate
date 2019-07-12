const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectSchema = require('./object')

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        index: true
    },
    password: String,
    isAdmin: Boolean,
    ObjectCollection: [
        ObjectSchema
    ]
});

const User = mongoose.model('users', UserSchema);

module.exports = {
    Schema: UserSchema,
    User
}