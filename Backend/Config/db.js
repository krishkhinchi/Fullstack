const mongoose = require("mongoose");
const uri = process.env.DB_URI;
require('dotenv').config()

function connectDb() {
  mongoose
    .connect(uri)
    .then(() => console.log("Connected to the MongoDB database"))
    .catch((err) => console.log("Connection error", err));
}

module.exports = connectDb;