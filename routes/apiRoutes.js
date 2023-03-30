const router = require('express').Router()
const db = require('../db/store')
// GET '/api/notes' should return all notes from db
router.get('/notes', (req, res) => {
  // get from db all notes
  db.getAllNotes()
    .then((notes) => {
      return res.json(notes)
    })
    .catch((error) => res.status(500).json(error))
})

router.post('/notes', (req, res) => {
  // add a note to db
})

router.delete('/notes/:id', (req, res) => {
  // delete note from db
})
module.exports = router;