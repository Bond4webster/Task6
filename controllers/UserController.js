const service = require('../services/UserService');
class UserController {
    constructor(){}
    addUser = async (req, res) => {
        try {
            const result = await service.add(req.body);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    deleteUser = async (req, res) => {
        try {
            const result = await service.del(req.params.id);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error: e.message});
        }
    }
    updateUser = async (req, res) => {
        try {
            const result = await service.update(req.params.id,req.body);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error: e.message});
        }
    }
    getUser = async (req, res) => {
        try {
            const result = await service.get(req.params.id);
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
            const result = await service.getCity(req.params.id);
            res.send(result);
        } catch (e) {
            res.status(400).send({error:e.message});
        }
    }
    loginUser = async (req, res) => {
        try {
            const result = await service.loginUser(req.body.login,req.body.password);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error: e.message})
        }
    }
    logoutUser = async (req, res) => {
        try {
            const result = await service.logoutUser(req);
            res.status(201).send(result);
        } catch (e) {
            res.status(400).send({error: e.message})
        }
    }
}

module.exports = UserController;