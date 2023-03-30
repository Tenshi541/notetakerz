const util = require('util')
const fs = require('fs')

// install uuid 
const uuidv4 = require('uuid/v4')

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

  //deleteNote
}

module.exports = new Store();