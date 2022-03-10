const path = require('path');
const router = require('express').Router

router.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/assets/index.html'))
);

//get route for notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/assets/notes.html'))
);
module.exports = router