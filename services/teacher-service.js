const Teacher = require('../models/teacher');
const  SubjectService = require('./subject-service');
const TeachersRoleService = require('../services/teachers-role-service');
const teachers = [];

class TeacherService {
  constructor() {
  }

  static salary(teacher){
    let myTeacherRoles = TeachersRoleService.findRoles(teacher);
    let sum = 0;
    myTeacherRoles.forEach(function (role) {
      sum += role.subject.getPayOff();
    });
    return sum + teacher.position.quote;
  }

}

module.exports = TeacherService;