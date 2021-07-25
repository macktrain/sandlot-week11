const data = require("../db/data")

module.exports = (app) => {
 
  app.get('/api/notes', (req, res) => {
    data.getNotes().then(function(notes){
      return res.json(notes)
    })
  });

  app.post('/api/notes', (req, res) => {
    data.addNote(req.body).then(function(note){
      res.json(note);
      console.log("Added a note.");
    })
    .catch((err)=> res.status(500).json(err))
  });

  app.delete('/api/notes/:id', (req, res) => {
    data.deleteNote(req.params.id).then(function(id){
      res.json(id);
    })
    .catch((err)=> res.status(500).json(err))
  });
};
