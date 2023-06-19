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

module.exports = notes;
