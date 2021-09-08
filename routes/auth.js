const express = require('express');
const router = express.Router();

const passport = require('../config/ppConfig');
const {auth} = require('../controllers')

router.get('/signup', auth.registerPage);
router.get('/login', auth.loginPage);
router.get('/logout', auth.logout);
router.post('/signup', auth.register);

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  successFlash: 'Welcome back ...',
  failureFlash: 'Either email or password is incorrect' 
}));



module.exports = router;