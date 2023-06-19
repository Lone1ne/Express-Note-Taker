const notes = require("express").Router();
// Import helper functions and dependencies in this case uuid and the fsUtils , custom
const uuid = require("../helpers/uuid");
// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require("../helpers/fsUtils");

//GET route for retriving all the notes
notes.get("/", (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

//POST Route for a new note
notes.post("/", (req, res) => {
  console.info(`${req.method} request received to add a note`);

  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      note_id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json("Note added sucessfully");
  } else {
    res.json("Error in adding note");
  }
});

module.exports = notes;
