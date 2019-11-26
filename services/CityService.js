const City = require('../models/CityModel');

const add = function (body) {
    const city = new City(body);
    city.save(function (err) {
        if (err) return console.error(err);
    });
    return {city};
}

const getAll =  async function(){
    return await City.find(function (err, cities) {
        if (err) return console.error(err);
        return cities;
    })
}

const get =  function(id){
    return  City.findById(id);
}

const update =  function(id,body){
    return City.findByIdAndUpdate(id,body);
}

const del = async function(id){
    return await City.findByIdAndDelete(id);
}


module.exports = {
    add,
    get,
    update,
    del,
    getAll
}