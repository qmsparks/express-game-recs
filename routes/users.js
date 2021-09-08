const express = require('express');
const router = express.Router();

const isLoggedIn = require('../middleware/isLoggedIn');
const {users} = require('../controllers');

router.get('/profile', isLoggedIn, users.profilePage);

module.exports = router;