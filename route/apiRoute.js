
const path = require('path');
const notes = require('../db/db.json');
const fs = require('fs');
const router = require('express').Router();

router.get('/api/notes', (req, res) => {
    res.json(notes)
})
router.post('/api/notes', (req, res) => {
    const note = {
        title: req.body.title,
        text: req.body.text
    }
    notes.push(note)
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(note))
    res.json(note)
})

module.exports = router