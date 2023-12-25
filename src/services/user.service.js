const UserModal = require('../models/user.model');
const fileService = require('../helpers/fileService');

class UserService {
    async getAllUsers() {
        const users = await UserModal.find();
        return users;
    }

    async getUserByKey(key) {
        if (!key) {
            throw new Error('key not specified');
        }
        const user = await UserModal.find({key});
        return user;
    }

    async deleteUserById(id) {
        if (!id) {
            throw new Error('ID not specified');
        }

        const user = await UserModal.findByIdAndDelete(id);

        return user;
    }

    async create(user) {
        const createdUser = await UserModal.create(user);
        return createdUser;
    }
}

module.exports = new UserService();
