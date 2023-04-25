const util = require('util')
const fs = require('fs')

// install uuid 
const uuidv4 = require('uuidv4')
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)
class Store {
  // read function
  read() {
    return util.promisify(fs.readFile)
  }
  // write function
  write(note) {
    return util.promisify(fs.writeFile('db/db.json', JSON.stringify(note)))
  }
  // getAllNotes
  getAllNotes() {
    return this.read().then((notes) => {
      let returnedNotes;

      try {
        returnedNotes = [].concat(JSON.parse(notes))
      } catch (error) {
        returnedNotes = []
      }

      return returnedNotes
    })
  }
  // addNewNote
  addNewNote() {
    const { title, text } = note
    const newNote = { title, text, id: uuidv4() }
    return this.getAllNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote)
  }
  //deleteNote
  deleteNote() {
    return this.getAllNotes()
      .then((notes) => notes.filter((note) => note.id !== id))
      .then((filteredNotes) => this.write(filteredNotes))
  }
}

module.exports = new Store();