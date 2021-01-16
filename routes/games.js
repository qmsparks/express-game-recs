const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.games.index);

router.get('/new', ctrl.games.gameForm);
router.post('/', ctrl.games.addGame);

router.get('/:id', ctrl.games.show);

module.exports = router;