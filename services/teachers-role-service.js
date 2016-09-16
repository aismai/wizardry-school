const teachersRoles = [];

class TeachersRoleService {
  static create(subject, teacher){
    return new TeachersRole(subject, teacher);
  }

  static findAll(){
    let array = [];
    return teachersRoles.concat(array);
  }

  static addRole(role){
    teachersRoles.push(role);
  }

  static findRoles(teacher){
    let groups = StudentGroupService.findAll();
    let allRoles = [];
    groups.forEach(function (group) {
      allRoles.push.apply(allRoles,group.teachersRoles.filter(function (elem) { return elem.teacher === teacher }));
    });
    return allRoles;
  }

  static addTeachersRole(teachersrole){
    teachersRoles.push(teachersrole);
  }
}

module.exports = TeachersRoleService;
const TeachersRole = require('../models/teachers-role');
