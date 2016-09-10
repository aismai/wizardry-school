const Teacher = require('./teacher');

class Subject {
  constructor(name, level, hours, quote) {
    this.setName(name);
    this.setLevel(level);
    this.setHours(hours);
    this.setQuote(quote);
    this.books = [];
  }

  addBook(book){
    this.books.push(book);
  }

  setName(name){
    this.name = name
  }

  getName(){
    return this.name;
  }

  setLevel(level){
    this.level = level;
  }

  getLevel(){
    return this.level;
  }

  setHours(hours){
    this.hours = hours;
  }

  getHours(){
    return this.hours;
  }

  setQuote(quote){
    this.quote = quote;
  }

  getQuote(){
    return this.quote;
  }

  getBooks(){
    return this.books;
  }

  getPayOff(){
    return this.hours * this.quote;
  }
}

module.exports = Subject;