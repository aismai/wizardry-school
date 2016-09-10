const TeachersRole = require('../models/teachers-role');
const StudentGroupService = require('./student-group-service');

class TeachersRoleService {
  constructor(){
  }

  static addRole(role){
    teacherRoles.push(role);
  }

  static findRoles(teacher){
    let groups = StudentGroupService.findAll();
    let allRoles = [];
    groups.forEach(function (group) {
      allRoles.push.apply(allRoles,group.teachersRoles.filter(function (elem) { return elem.teacher === teacher }));
    });
    return allRoles;
  }
}

module.exports = TeachersRoleService;