const BaseService = require('./base-service');
const store = require('./global-store');

class BookService extends BaseService {
  static create(subject, name,level){
    return new Book(subject, name, level);
  }

  static getStore(){
    return store.get('Books');
  }

}

module.exports = BookService;
const Book = require('../models/book.js');
