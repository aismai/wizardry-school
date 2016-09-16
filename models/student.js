const StudentService = require('../services/student-service');
const Person = require('./common/person');

class Student extends Person {
  constructor(user) {
    super(user);
    this.parents = [];
  }
  setParents(parents){
    this.parents = parents;
  }

  getParents(){
    return this.parents;
  }
  addParent(parent){
    this.parents.push(parent);
  }

  save(){
    StudentService.addStudent(this);
  }
}

module.exports = Student;
