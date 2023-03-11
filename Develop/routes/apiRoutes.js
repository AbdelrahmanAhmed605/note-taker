const notes = require("express").Router();
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");
const notes_data = require("../db/db.json");

// GET Route for retrieving all the notes
notes.get("/notes", (req, res) => {
  console.info(`${req.method} request received for notes`);
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data))); //Reads data from database and sends it as a JSON response with the parsed JSON data
});

// POST Route to add a new note
notes.post("/notes", (req, res) => {
  console.info(`${req.method} request received to add a note`);
  console.log(req.body);

  //Destructure the data being posted in the body of the request
  const { title, text } = req.body;

  //Check that all the required properties are present
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuid(),
    };

    readAndAppend(newNote, "./db/db.json"); //Append the note into the database file
    res.json(`Note added successfully`); // Confirm to the client that the POST request was successful 
  } else {
    res.error("Error in adding note");
  }
});

module.exports = notes;
