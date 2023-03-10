const html = require("express").Router();
const path = require("path");
// Serve the static notes.html file when the client requestes to GET the "/notes" route
html.get("/notes", (req, res) => {
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "../public/notes.html"));
}
);

// Handle all other GET requests, that are not specified above, by serving the index.html file
html.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

module.exports = html;