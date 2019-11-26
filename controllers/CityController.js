const service = require('../services/CityService');
class CityController {
    constructor(){}
    addCity = async (req, res) => {
        try {
            const result = await service.add(req.body);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    deleteCity = async (req, res) => {
        try {
            const result = await service.del(req.params.id);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error: e.message});
        }
    }
    updateCity = async (req, res) => {
        try {
            const result = await service.update(req.params.id,req.body);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error: e.message});
        }
    }
    getCity = async (req, res) => {
        try {
            const result = await service.get(req.params.id);
            res.send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    getAllCities = async (req, res) => {
        try {
            const result = await service.getAll();
            res.send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
}

module.exports = CityController;