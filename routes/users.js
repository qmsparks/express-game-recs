const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/new', ctrl.users.registerForm);
router.post('/', ctrl.users.register);

router.get('/login', ctrl.users.loginForm);
router.post('/login', ctrl.users.login);

router.get('/:id', ctrl.users.show);


router.delete('/logout', ctrl.users.logout);

router.delete('/:id', ctrl.users.deleteUser);




module.exports = router;