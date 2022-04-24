const router = require('express').Router();
const fs = require("fs");
const saveData = require('../db/db.json');
// function saveData {

//  }
// GET request
// router.get('/notes', function (req, res) {
//     // saveData
//     //     .retrieveNotes()
//     //     .then(notes => res.json(notes))
//     //     .catch(err => res.status(500).json(err));
// });
router.get('/notes', (req, res) => {
    fs.readFile("../db/db.json",(err, data)=>{
        console.log(data)
        console.log(JSON.parse(data))
      res.json(JSON.parse(data))
    })
      
  });
// POST request
router.post('/notes', (req, res) => {
   fs.writeFile("../db/db.json", (err, data)=> {
        res.json(JSON.parse(data))
   })
});

// Bonus - DELETE request
// router.delete('/notes/:id', function (req, res) {
//     saveData
//         .deleteNote(req.params.id)
//         .then(() => res.json({ ok: true }))
//         .catch(err => res.status(500).json(err));
// });


module.exports = router;