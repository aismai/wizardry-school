const Subject = require('../models/subject');
const subjects = [];

class SubjectService{
  static create(name, level, hours, quote){
    return new Subject(name, level, hours, quote);
  }

  static findAll(){
    let array = [];
    return subjects.concat(array);
  }

  static findBy(field, param){
    return subjects.filter(function (subject) {
      return subject[field] === param;
    })
  }

  static removeByName(name){
    let obj =  subjects.find(function (subject) {
      return subject.name === name;
    });

    let i = subjects.indexOf(obj);
    if(i != -1) subjects.splice(i, 1);
  }

  static getPayment(subject){
    return subject.quote * subject.hours;
  }

  static addSubject(subject){
    subjects.push(subject);
  }

}

module.exports = SubjectService;