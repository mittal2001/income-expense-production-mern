const express = require('express');
const { loginController, RegisterController } = require('../controllers/userController');

//router object
const router = express.Router();

//routerss

//POST || LOGIN
router.post('/login',loginController);

//POST || REGISTER USER
router.post('/register',RegisterController)

module.exports = router