const UserService = require('../services/user.service');

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();
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

    async deleteUserById(req, res) {
        try {
            const post = await UserService.deleteUserById(req.params.id);
            return res.json(post);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async createUser(req, res) {
        console.log('req.body: ', req.body);
        try {
            const user = await UserService.createUser(req.body);

            res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new UserController();
