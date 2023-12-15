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

    async getOne(req, res) {
        try {
            const user = await UserService.getOne(req.params.id);
            return res.json(user);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new UserController();
