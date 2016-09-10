const Student = require('../models/student');
const students = [];

class StudentService {
  constructor(){
  }

  // static create(user){
  //   let newStudent = new Student(user);
  //   // students.push(newStudent);
  //   return newStudent;
  // }

  static findAll(){
    let array = [];
    return students.concat(array);
  }

  static findBy(field, param){
    return students.filter(function (student) {
      return student[field] === param;
    });
  }

  static removeByName(name){
    let obj =  students.find(function (student) {
      return student.name === name;
    });
    let i = students.indexOf(obj);
    if(i != -1) students.splice(i, 1);
  }

  static addStudent(student){
    students.push(student);
  }
}

module.exports = StudentService;