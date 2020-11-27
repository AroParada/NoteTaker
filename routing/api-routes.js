const noteData = require("../db/db.json");
const fs = require("fs");
const path = require("path");
var num=0
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../db/db.json"));
  });
 
   app.post("/api/notes", function(req, res) {
        
        const{
          title,text
        }=req.body
        var newNote = {
          title,text,id:num
        }
        num++
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
  app.delete("/api/notes:id", function(req, res) {
    fs.readFile("./db/db.json", (err, data) => {
      if (err) throw err;
      const allTheNotes = JSON.parse(data);
      allTheNotes.push(newNote);
      for (let index = 0; index < allTheNotes.length; index++) {
        const element = array[index];
        if (req.params.id === id){
          Splice(i,1)
          fs.writeFile(
            "./db/db.json",
            JSON.stringify(allTheNotes, null, 2),
            (err) => {
              if (err) throw err;
              res.json(noteData);
              console.log("note has been deleted");
            }
          );
        }
      };
    });
  });
};