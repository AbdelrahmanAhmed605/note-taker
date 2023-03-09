//Import modules
const express = require("express")
const path = require("path")
const fs = require("fs")

const PORT = 3001;
// Contains the array of notes saved by the user in the database json file
const notes = require("./db/db.json")

const app = express()
// Middleware for parsing json
app.use(express.json());
// Static middleware for serving assets in the public folder
app.use(express.static('public'));

// Serve the static notes.html file when the client requestes to GET the "/notes" route
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// Returns the JSON data inside the database when the client requests to GET the "/api/notes" route
app.get("/api/notes", (req, res) =>
    res.json(notes)
);

// Handle all other GET requests, that are not specified above, by serving the index.html file
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// Start the server, listen on the specified port number
app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
