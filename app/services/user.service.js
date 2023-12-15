const UserModal = require('../modals/user.modal');

class UserService {
    async getAll() {
        const users = await UserModal.find();
        return users;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID');
        }
        const user = await UserModal.findById(id);
        return user;
    }
}

module.exports = new UserService();
