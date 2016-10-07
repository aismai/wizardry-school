const BaseService = require('./base-service');
const store = require('./global-store');

class TeacherService extends BaseService {
  static create(user, position){
    return new Teacher(user, position);
  }

  static salary(teacher){
    let myTeacherRoles = TeachersRoleService.findRoles(teacher);
    let sum = 0;
    myTeacherRoles.forEach(function (role) {
      sum += role.subject.getPayOff();
    });
    return sum + teacher.position.quote;
  }

  static getStore(){
    return store.get('Teachers');
  }
}

module.exports = TeacherService;

const TeachersRoleService = require('./teachers-role-service');
const Teacher = require('../models/teacher');
