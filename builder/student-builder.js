const students = require('./data/person-data');

class StudentBuilder {
  static create(student){
    return StudentService.create(student);
  }
  static fillStudents(){
    for(let student in students){
      let newStudent = StudentService.create(students[student]);
      StudentService.addStudent(newStudent);
    }
  }
}

module.exports = StudentBuilder;
const StudentService = require('../services/student-service');
