const router = require('express').Router()
const store = require('../db/store')

// GET '/api/notes' should return all notes from db
router.get('/notes', (req, res) => {
  store
    .getAllNotes()
    .then((notes) => {
      return res.json(notes)
    })
    .catch((error) => res.status(500).json(error))
});

router.post('/notes', (req, res) => {
  store
    .addNewNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err))
});

router.delete('/notes/:id', (req, res) => {
  store
    .delete(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err))

});
module.exports = router;