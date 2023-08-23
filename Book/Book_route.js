const express = require("express");
const router = express.Router();
const {getBooks,addBook,updateBook,deleteBook} = require('./Book_controller');

router.route('/getBooks').get(getBooks);
router.route('/addBook').post(addBook);
router.route('/updateBook').patch(updateBook);
router.route('/deleteBook/:id').get(deleteBook);

module.exports = router;