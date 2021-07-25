const util = require('util');
const fs = require('fs')
const { uuid } = require('uuidv4');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Data {
  read(){
    return readFile("db/db.json", 'utf8');
  }

  write(note){
    return writeFile("db/db.json", JSON.stringify(note))
  }

  getNotes(){
    return this.read().then(function(notes){
      let parseText;

      try {
        parseText = [].concat(JSON.parse(notes));
      } catch (error) {
        parseText = [];
      }
      return parseText;
    })
  }

  addNote(note){
    const {title,text} = note;
    const newNote = {title,text};
    newNote.id = uuid();

    return this.getNotes()
    .then((notes) => [...notes, newNote])
    .then((updatedNotes) => this.write(updatedNotes))
    .then((newNotes) => newNotes)
    .catch ((e) => console.log (e))
  }

  deleteNote(id){ 

    return this.getNotes()
    .then((notes) => notes.filter(note => note.id !== id))
    .then((updatedNotes) => this.write(updatedNotes))
    .then((newNotes) => newNotes)
    .catch ((e) => console.log (e))
  }
}

module.exports = new Data();