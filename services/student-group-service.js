const BaseService = require('./base-service');

class StudentGroupService extends BaseService {
  static create(level, name){
    return new StudentGroup(level, name);
  }

  static getStore(){
    return store.get('StudentGroups');
  }

  static findGroup(group){
    return StudentGroupService.findBy('groupName', group);
  }

  static getTeachers(group){
    return StudentGroupService.findGroup(group).teachersRoles;
  }

  static getStudents(group) {
    return StudentGroupService.findGroup(group).students;
  }

  static addStudent(student, group){
    StudentGroupService.findGroup(group).students.push(student);
  }

  static addTeachersRole(group, teachersRole){
    StudentGroupService.findGroup(group).teachersRoles.push(teachersRole);
  }
}

module.exports = StudentGroupService;
const StudentGroup = require('../models/student-group');
