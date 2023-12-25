const Router = require('express');
const UserController = require('../controllers/user.controller');

const router = Router();

router.get('/users', UserController.getAllUsers);
// router.get('/users/:id', UserController.getUserById);
router.get('/users/:key', UserController.getUserByKey);
router.delete('/users/:id', UserController.deleteUserById);
router.post('/users', UserController.createUser);

module.exports = router;
