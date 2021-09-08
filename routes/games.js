const express = require('express');
const router = express.Router();

const {games} = require('../controllers');


router.get('/', games.index);
router.get('/:id', games.show);
module.exports = router;