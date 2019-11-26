const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectID;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    cityID:{
        type: ObjectID,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;