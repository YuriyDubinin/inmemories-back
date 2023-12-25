const UserModal = require('../modals/user.modal');
const fileService = require('../helpers/fileService');

class UserService {
    async getAllUsers() {
        const users = await UserModal.find();
        return users;
    }

    // async getUserById(id) {
    //     if (!id) {
    //         throw new Error('не указан ID');
    //     }
    //     const user = await UserModal.findById(id);
    //     return user;
    // }

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

    async createUser(post) {
        console.log('post: ', post);
        const createdUser = await UserModal.create(post);

        return createdUser;
    }
}

module.exports = new UserService();
