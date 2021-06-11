const { Router } = require('express');
const router = Router();
const players = require('./players')

router.use('/players', players)

module.exports = router;