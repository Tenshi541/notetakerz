const util = require('util');
const fs = require('fs');

// install uuid 
var uuidv1 = require('uuidv1')
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Store {
  // read function
  read() {
    return readFileAsync('db/db.json', 'utf8')
  }
  // write function
  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note));
  }
  // getAllNotes
  getAllNotes() {
    return this.read().then((notes) => {
      let returnedNotes;

      try {
        returnedNotes = [].concat(JSON.parse(notes));
      } catch (error) {
        returnedNotes = [];
      }

      return returnedNotes;
    });
  }
  // addNewNote
 addNewNote() {
    return this.getAllNotes().then((notes) => {
      let newNote = req.body
      notes.push(newNote)
      this.write(notes)
    })
  }
  // deleteNote
  delete(id) {
    return this.getAllNotes().then((notes) => {
      const filteredNotes = notes.filter((note) => note.id !== id);
      this.write(filteredNotes);
    });
  }
 
}

module.exports = new Store();