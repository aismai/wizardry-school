const BaseService = require('./base-service');
const StudentGroupService = require('./student-group-service');

class TeachersRoleService extends BaseService {
  static create(subject, teacher){
    return new TeachersRole(subject, teacher);
  }

  static findRoles(teacher){
    let groups = StudentGroupService.getAll();
    let allRoles = [];
    groups.forEach(function (group) {
      allRoles.push.apply(allRoles,group.teachersRoles.filter(function (elem) { return elem.teacher === teacher }));
    });
    return allRoles;
  }

}

module.exports = TeachersRoleService;
const TeachersRole = require('../models/teachers-role');
