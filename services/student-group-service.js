const studentGroups = [];

class StudentGroupService {
  static create(level, name){
    return new StudentGroup(level, name);
  }

  static findAll(){
    let array = [];
    return studentGroups.concat(array);
  }

  static findBy(field, param){
    return studentGroups.filter(function (elem) {
      return elem[field] === param;
    });
  }

  static findGroupByName(name){
    return studentGroups.find(function (studentGroup) {
      return   studentGroup.groupName() === name;
    });
  }


  static addGroup(group){
    studentGroups.push(group);
  }

  static getTeachers(group){
    return studentGroups.find
  }

  static getStudents(name) {
    let group = StudentGroupService.findByGroupName(name);
    return group.students;
  }
}

module.exports = StudentGroupService;
const StudentGroup = require('../models/student-group');
