const StudentGroupService = require('../services/student-group-service');

class StudentGroup {
  constructor(level, name){
    this.setLevel(level);
    this.setGroupNumber(name);
    this.students = [];
    this.teachersRoles = [];
    this.setActive(false);
  }

  setLevel(level){
    this.level = level;
  }

  getLevel(){
    return this.level;
  }

  setGroupNumber(number){
    this.groupNumber = number;
  }

  getGroupNumber(){
    return this.groupNumber;
  }

  getStudents(){
    return this.students;
  }

  groupName(){
    return `${this.level} ${this.groupNumber}`;
  }

  addStudent(student){
    this.students.push(student);
  }

  addTeachersRole(teacherRole){
    this.teachersRoles.push(teacherRole);
  }

  save(){
    StudentGroupService.addGroup(this);
  }

  setActive(status){
    this.isActive = status;
  }
}

module.exports = StudentGroup;