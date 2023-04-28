const util = require('util');
const fs = require('fs');

// install uuid 
var uuidv1 = require('uuidv1')
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  // read function
  async read() {
    try {
      const notes = await readFileAsync('db/db.json', 'utf8');
      return JSON.parse(notes);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  // write function
  async write(note) {
    try {
      await writeFileAsync('db/db.json', JSON.stringify(note));
    } catch (error) {
      console.error(error);
    }
  }

  // getAllNotes
  async getAllNotes() {
    try {
      const notes = await this.read();
      return notes;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  // addNewNote
  async addNewNote(note) {
    try {
      const { title, text } = note;
      if (!title || !text) {
        throw new Error('Note title and text cannot be empty');
      }
      const newNote = { title, text, id: uuidv1() };
      const notes = await this.getAllNotes();
      const updatedNotes = [...notes, newNote];
      await this.write(updatedNotes);
      return newNote;
    } catch (error) {
      console.error(error);
    }
  }


  // deleteNote
  async delete(id) {
    try {
      const notes = await this.getAllNotes();
      if (!id) {
        throw new Error('Note id cannot be empty');
      }
      const filteredNotes = notes.filter((note) => note.id !== id);
      await this.write(filteredNotes);
      return filteredNotes;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new Store();
