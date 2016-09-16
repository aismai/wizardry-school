const Person = require('./common/person');
const TeacherService = require('../services/teacher-service');

class Teacher extends Person {
  constructor(user, position) {
    super(user);
    this.setPosition(position);
    this.subjects = [];
  }

  setSubjects(subjects){
    this.subjects = subjects;
  }

  getSubjects(){
    return this.subjects;
  }


  addSubject(subject) {
    this.subjects.push(subject);
  }
  setPosition(position){
    this.position = position;
  }

  getPosition(){
    return this.position;
  }
  save(){
    TeacherService.addTeacher(this);
  }
}

module.exports = Teacher;
