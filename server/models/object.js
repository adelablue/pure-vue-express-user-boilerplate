const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectSchema = new Schema({
    xid: {
        type: String,
        //unique: true/false,
        //index: true/false
    },
    name: String
});

const Object = mongoose.model('object', ObjectSchema);

module.exports = {
    Schema: ObjectSchema,
    Object
}