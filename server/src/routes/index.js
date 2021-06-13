const { Router } = require('express');
const router = Router();
const players = require('./players')
const matches = require('./matches')

router.use('/players', players)
router.use('/matches', matches)

module.exports = router;