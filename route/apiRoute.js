const path = require('path');

const notes = require('../db/db.json')
const fs = require('fs');
const router = require('express').Router;

router.get('/api/notes', (req, res) => {
    res.json(notes)
})
router.POST('/api/notes', (req, res) => {
    notes.push(req.body)
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
})

module.exports = router