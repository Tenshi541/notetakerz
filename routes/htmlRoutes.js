const path = require('path');
const router = require('express').Router()

//routes to notes.html
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
)

//route to index.html
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})


module.exports = router;