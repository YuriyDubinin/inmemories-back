const Router = require('express');
const UserController = require('../controllers/user.controller');

const router = Router();

router.get('/users', UserController.getAll);
// router.get('/users/:id', UserController.getUserById);
router.get('/users/:key', UserController.getUserByKey);

module.exports = router;
