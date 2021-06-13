const { Router } = require('express');
const Match = require('../models/match');
const router = Router();

router.get('/', async (req, res) => {
  const matches = await Match.find();
  res.json(matches);
});

router.post('/', async (req, res) => {
  const match = new Match(req.body.match);
  try {
    await match.save();
    res.json(match);
  } catch(err) {
    console.log(err);
    res.json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const match = await Match.findById({ id });
    res.json(match);
  } catch(err) {
    console.log(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const match = await Match.findByIdAndUpdate({ id }, req.body.match, { new: true })
    res.json(match);
  } catch(err) {
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Match.remove({ id });
    res.json(req.params);
  } catch(err) {
    console.log(err);
  }
});

module.exports = router;