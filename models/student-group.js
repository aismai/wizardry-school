class StudentGroup {
  constructor(level, name){
    this.setLevel(level);
    this.setGroupName(name);
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

  setGroupName(number){
    this.groupName = number;
  }

  getGroupName(){
    return this.groupName;
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
const StudentGroupService = require('../services/student-group-service');
