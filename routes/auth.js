const express = require('express');
const router = express.Router();

const {auth} = require('../controllers')

router.get('/signup', auth.registerPage);
router.get('/login', auth.loginPage);
router.get('/logout', auth.logout);
router.post('/login', auth.login);
router.post('/signup', auth.register);



module.exports = router;