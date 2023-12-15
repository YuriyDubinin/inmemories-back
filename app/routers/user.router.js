const Router = require('express');
const UserController = require('../controllers/user.controller');

const router = Router();

router.get('/users', UserController.getAll);
router.get('/users/:id', UserController.getOne);

module.exports = router;
