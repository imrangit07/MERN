const express = require('express');
const router = express.Router();
const userControll = require('../Controllers/userControllers');
router.post('/register', userControll.UserRegistration);
router.post('/login', userControll.UserLogin);

module.exports = router;