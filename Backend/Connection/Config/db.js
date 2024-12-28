const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/MERN";

function connectDb() {
  mongoose
    .connect(uri)
    .then(() => console.log("Connected to the MongoDB database"))
    .catch((err) => console.log("Connection error", err));
}

module.exports = connectDb;