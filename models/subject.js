const Teacher = require('./teacher');

class Subject {
  constructor(subject) {
    this.setName(subject.name);
    this.setLevel(subject.level);
    this.setHours(subject.hours);
    this.setQuote(subject.quote);
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

  save(){
    SubjectService.add(this);
  }
}

module.exports = Subject;
const SubjectService = require('../services/subject-service');
