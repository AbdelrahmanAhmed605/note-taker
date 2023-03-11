const uuid = require("uuid")
// Immediately export a function that generates cryptographically-strong unique identifiers
module.exports = () => uuid.v4();
