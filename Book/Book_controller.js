const express = require("express");
const Book = require("./Book_model");  

/**
 * get all books
 * @param {*} req 
 * @param {*} res 
 */
const getBooks = async (req, res) => {
  try {
    const books = await Book.find().then((books) => {
      res.status(200).json(books);
    }).catch((err) => {
      res.status(400).json({ error: err.message });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addBook = async (req, res) => {
  try {
    const {bookName, bookAuthor, bookDescription, bookImage} = req.body;
    const newBook = new Book({bookName, bookAuthor, bookDescription, bookImage});
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const updateBook = async (req, res) => {
  try {
    const {bookName, bookAuthor, bookDescription, bookImage} = req.body;
    const newBook = new Book({bookName, bookAuthor, bookDescription, bookImage});
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const deleteBook = async (req, res) => { 
  console.log(req.params.id);
  const id = req.params.id;
  try{
    const deletedBook = await Book.findByIdAndDelete(id).then((deletedBook) => {
      res.status(200).json({ message: "Book deleted successfully" });
    }
    ).catch((err) => {
      res.status(400).json({ error: err.message });
    });
  }catch(err){
    res.status(500).json({ error: err.message });
  }
}


module.exports = { getBooks, addBook, updateBook, deleteBook };