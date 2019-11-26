const User = require('../models/UserModel');

const add = async function (body) {
    const user = await new User(body);
    user.save(function (err) {
        if (err) return console.error(err);
    });
    return {user};
}

const getAll =  async function(){
    return await User.find(function (err, users) {
        if (err) return console.error(err);
        return users;
    })
}

const get =  function(id){
    return  User.findById(id);
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


module.exports = {
    add,
    get,
    update,
    del,
    getAll,
    getCity
}