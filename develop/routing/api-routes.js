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
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------
   app.post("/api/notes", function(req, res) {
        var newNote = req.body;
  });

  app.delete("/api/notes", function(req, res) {

  });
};
