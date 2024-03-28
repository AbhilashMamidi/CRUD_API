const express = require('express');
const router = express.Router();
const Alien = require('./models/alien');

router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find();
        res.json(aliens);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});

router.post('/', async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });
    try {
        const savedAlien = await alien.save();
        res.json(savedAlien);
    } catch (err) {
        res.status(400).send('Error: ' + err);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updatedAlien = await Alien.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAlien) {
            return res.status(404).send('Alien not found');
        }
        res.json(updatedAlien);
    } catch (err) {
        res.status(400).send('Error: ' + err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedAlien = await Alien.findByIdAndDelete(req.params.id);
        if (!deletedAlien) {
            return res.status(404).send('Alien not found');
        }
        res.json(deletedAlien);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});

module.exports = router;
