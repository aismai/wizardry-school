const books = [];

class BookService {
  static create(subject, name,level){
    return new Book(subject, name, level);
  }
   static findAll(){
     let array = [];
    return books.concat(array);
   }

  static findByName(name){
    return books.filter(function (book) {
      return book.name === name;
    });
  }

  static findBy(field, param){
    return books.filter(function (book) {
      return book[field] === param;
    });
  }

  static removeByName(name){
    let obj =  books.find(function (book) {
      return book.name === name;
    });

    let i = books.indexOf(obj);
    if(i != -1) books.splice(i, 1);
  }

  static addBook(book){
    books.push(book);
  }
}

module.exports = BookService;
const Book = require('../models/book.js');
