const UserService = require('../services/user.service');

class UserController {
    async getAll(req, res) {
        try {
            const users = await UserService.getAll();
            return res.json(users);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    // async getUserById(req, res) {
    //     try {
    //         const user = await UserService.getUserById(req.params.id);
    //         return res.json(user);
    //     } catch (e) {
    //         res.status(500).json(e);
    //     }
    // }

    async getUserByKey(req, res) {
        try {
            const user = await UserService.getUserByKey(req.params.key);
            return res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createUser(req, res) {
        try {
            // const post = await UserService.createUser(req.body, req.files.picture);
            const post = await UserService.createUser(req.body);
            res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async deleteUserByKey(req, res) {
        try {
            const post = await UserService.deleteUser(req.params.key);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new UserController();
