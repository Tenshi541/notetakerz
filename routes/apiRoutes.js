const router = require('express').Router()
const store = require('../db/store')

// GET '/api/notes' should return all notes from db
router.get('/notes', (req, res) => {
  // get from db all notes
  db.getAllNotes()
    .then((notes) => {
      return res.json(notes)
    })
    .catch((err) => res.status(500).json(err))
})

router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();
  let note = createNewNote(req.body, notes);
  res.json(note)
})

router.delete('/notes/:id', (req, res) => {
  delete(notes, req.params.id);
  res.json(notes);
})
module.exports = router;