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
  console.info(`\n${req.method} request received for notes\n`);
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
    res.status(400).json({ error: "Missing required fields" });
  }
});

// DELETE Route to remove a note by finding its id
notes.delete("/notes/:id", (req, res) => {
  console.info(`${req.method} request received to remove a note`);

  if (req.params.id) {
    readFromFile("./db/db.json").then((data) => {
      const note_data = JSON.parse(data);
      //find the note to delete by its id
      const delete_note = note_data.find((note) => note.id === req.params.id);

      // Check if the note exists in the database
      if (!delete_note) {
        res.status(404).json({ message: "Note not found" });
        return;
      }

      console.log(delete_note);
      // removes the note from the database array
      const index_del_note = note_data.indexOf(delete_note);
      note_data.splice(index_del_note, 1);

      //rewrites the updated array with the removed note to the database json file
      writeToFile("./db/db.json", note_data);
      // send success response with the deleted note
      res.json({
        message: `Note removed successfully`,
        deleted_note: delete_note,
      });
    });
  } else {
    // handle error if the note id is not provided in the route parameter
    res.status(400).json({ error: "Error in deleting note" });
  }
});

module.exports = notes;
