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

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const player = await Player.findOne({ _id: id });
        res.json(player);
    } catch(err) {
        console.log(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const player = await Player.findByIdAndUpdate(id, req.body.player)
        res.json(player);
    } catch(err) {
        console.log(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Player.remove({ _id: id });
        res.json(req.params);
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;