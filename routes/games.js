const express = require('express');
const router = express.Router();

const {games} = require('../controllers');

router.get('/', games.index);
router.get('/new', games.newForm);
router.get('/:id', games.show);
router.get('/:id/edit', games.editForm);
router.post('/', games.addGame);
router.post('/:id', games.updateGame);
router.delete('/:id', games.destroy);


module.exports = router;