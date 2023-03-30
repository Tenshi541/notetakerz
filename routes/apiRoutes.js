const router = require('express').Router()

// GET '/api/notes' should return all notes from db
router.get('/notes', (req, res) => {
  // get from db all notes
})

router.post('/notes', (req, res) => {
  // add a note to db
})

router.delete('/notes/:id', (req, res) => {
  // delete note from db
})
module.exports = router;