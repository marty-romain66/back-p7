const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware');
const multer = require('../middlewares/multer-config');

// Routes pour les utilisateurs
router.post('/signup',multer, userController.signup);
router.post('/login', userController.login);
router.get('/user/:id',  userController.getOneUser);
router.put('/user/:id', multer, userController.modifyUser);
router.delete('/user/:id',  userController.deleteUser);

// Routes pour les admins
router.get('/admin/users/:id',  userController.getAllUsersByAdmin);
router.put('/admin/users/:id', auth, userController.modifyUserRole);
router.delete('/admin/users/:id',  userController.deleteUserByAdmin);

module.exports = router;
