const Book = require('../models/book');

class BookBuilder {
  static create(book){
    return new Book(book.subject, book.name, book.level);
  }
}

module.exports = BookBuilder;