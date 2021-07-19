const fs = require ('fs');

module.exports = (app) => {
 
  app.get('/api/notes', (req, res) => 
  {
    document.getElementById("save-note").display = "block";
    res.json(tableData)
  });

  app.post('/api/notes', (req, res) => 
  {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitListData.push(req.body);
      res.json(false);
    }
  });

  app.delete('/api/notes', (req, res) => {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
