const express = require('express');
const login = require('./login');
const register = require('./register');
const portfolio = require('./portfolio');

const auth = require('./auth');

const router = express.Router();

router.use(login);
router.use(register);
//router.use('/xxxx', auth.isAdmin, xxxx);
router.use('/portfolio', auth.isAuthenticated, portfolio);

module.exports = router;