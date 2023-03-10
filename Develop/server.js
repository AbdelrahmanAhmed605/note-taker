//Import modules
const express = require("express");
const path = require("path");
const api = require("./routes/apiRoutes");
const html = require("./routes/htmlRoutes");

const PORT = 3001;

const app = express();
app.use(express.json()); // Middleware for parsing json
app.use(express.static("public")); // Static middleware for serving assets in the public folder
app.use("/api", api); // set up the api Router as middleware which looks for routes beginning with /api
app.use("", html); // set up the html Router as middleware to serve up the html files

// Start the server, listen on the specified port number
app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
