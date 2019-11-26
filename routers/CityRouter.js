const express = require('express');

const cityValidation = require('../middleware/validation/CityValidation');
const validation = require('../middleware/validation/validation');
const CityController = require('../controllers/CityController');
const city_controller = new CityController();

const cityRouter = new express.Router();

cityRouter.get('/City',city_controller.getAllCities);
cityRouter.get('/City/:id',city_controller.getCity);
cityRouter.post('/City',validation(cityValidation),city_controller.addCity);
cityRouter.put('/City/:id',validation(cityValidation),city_controller.updateCity);
cityRouter.delete('/City/:id',city_controller.deleteCity);

module.exports = cityRouter;