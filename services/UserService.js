const User = require('../models/UserModel');

const add = async function (body) {
    const user = new User(body);
    return await user.save();
}

const getAll =  async function(){
    return await User.find();
}

const get = async function(id){
    return await User.findById(id);
}

const update =  function(id,body){
    return User.findByIdAndUpdate(id,body);
}


const del = async function(id){
    return await User.findByIdAndDelete(id);
}
// вводим id city
const getCity = async function(id){
    const mongoose = require('mongoose');
    const ObjectID = mongoose.Types.ObjectId(id);
    const result = await User.aggregate([
        {$match: {cityID: ObjectID}},
        {
            $lookup: {
                from: "cities",
                localField: "cityID",
                foreignField: "_id",
                as: "city"
            }
        }
    ])
    return result
}

const loginUser = async function (login,password){
    const user = await User.findByCredentials(login, password);
    const token = await user.generateAuthToken();
    return 'Вы авторизированы! Ваш токен: ' + token;
}

const logoutUser = async function(req){
    req.user.tokens = req.user.tokens.filter((token) => {
        return token.token !== req.token

    })
    await req.user.save()
    return 'Вы вышли из учетной записи '+req.user.login;
}

module.exports = {
    add,
    get,
    update,
    del,
    getAll,
    getCity,
    loginUser,
    logoutUser
}