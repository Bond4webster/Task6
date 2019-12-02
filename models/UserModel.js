const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
        type: String,
        required: true
    },
    login:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim:true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
});

userSchema.statics.findByCredentials = async (login, password) => {
    const user = await User.findOne({login});
    if(!user) {
        throw new Error('Unable user')
    }

    /*const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Unable to login')
    }*/

    return user
}

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({_id: user._id.toString() }, 'expressapp');
    user.tokens = user.tokens.concat({ token });
    user.save();

    return token
}

const User = mongoose.model('User', userSchema);
module.exports = User;