const service = require('../services/UserService');
class UserController {
    constructor(){}
    addUser = async (req, res) => {
        try {
            const body = req.body;
            const result = await service.add(body);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    deleteUser = async (req, res) => {
        try {
            const id = req.params.id;
            const result = await service.del(id);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error: e.message});
        }
    }
    updateUser = async (req, res) => {
        try {
            const id = req.params.id;
            const body = req.body;
            const result = await service.update(id,body);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error: e.message});
        }
    }
    getUser = async (req, res) => {
        try {
            const id = req.params.id;
            const result = await service.get(id);
            res.send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    getAllUsers = async (req, res) => {
        try {
            const result = await service.getAll();
            res.send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    getUserWithCity = async (req, res) => {
        try {
            const id = req.params.id;
            const result = await service.getCity(id)
            res.send(result)
        } catch (e) {
            res.status(400).send({error:e.message})
        }
    }
}

module.exports = UserController;