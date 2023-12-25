const UserModal = require('../modals/user.modal');
const fileService = require('../helpers/fileService');

class UserService {
    async getAll() {
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

    async createUser(post, picture) {
        const fileName = fileService.saveFile(picture);
        const createdPost = await PostModal.create({...post, picture: fileName});
        return createdPost;
    }
}

module.exports = new UserService();
