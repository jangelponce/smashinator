const { Router } = require('express');
const Player = require('../models/player');
const router = Router();

router.get('/', async (req, res) => {
  const players = await Player.find();
  res.json(players);
});

router.post('/', async (req, res) => {
  const player = new Player(req.body.player);
  try {
    await player.save();
  } catch(err) {
    console.log(err);
  }
  res.json(player);
});

router.get('/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const player = await Player.findOne({ name });
    res.json(player);
  } catch(err) {
    console.log(err);
  }
});

router.put('/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const player = await Player.findOneAndUpdate({ name }, req.body.player, { new: true })
    res.json(player);
  } catch(err) {
    console.log(err);
  }
});

router.delete('/:name', async (req, res) => {
  try {
    const { name } = req.params;
    await Player.remove({ name });
    res.json(req.params);
  } catch(err) {
    console.log(err);
  }
});

module.exports = router;