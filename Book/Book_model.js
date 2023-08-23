const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Book = new Schema(
  { 
    bookName: { type: String },
    bookAuthor: { type: String },
    bookImage: { type: String },
    bookDescription: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", Book);
