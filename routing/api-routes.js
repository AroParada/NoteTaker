const noteData = require("../db/db.json");
const fs = require("fs");
const path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });
 
   app.post("/api/notes", function(req, res) {
        var newNote = req.body;
        console.log(req.body)
        fs.readFile("./db/db.json", (err, data) => {
			    if (err) throw err;
			    const allTheNotes = JSON.parse(data);
			    allTheNotes.push(newNote);
            fs.writeFile(
              "./db/db.json",
              JSON.stringify(allTheNotes, null, 2),
              (err) => {
                if (err) throw err;
                res.json(noteData);
                console.log("note has been created");
              }
            );
          });
  });
  app.delete("/api/notes", function(req, res) {

  });
};