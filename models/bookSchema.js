// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defining book Schema
const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  bookLink: { type: String },
});

// Passing bookSchema instance to mongoose.model
const Book = mongoose.model("Book", bookSchema);

// Exporting Book Schema
module.exports = Book;
