const teachers = [];

class TeacherService {
  static create(user, position){
    return new Teacher(user, position);
  }

  static findAll(){
    let array = [];
    return teachers.concat(array);
  }

  static salary(teacher){
    let myTeacherRoles = TeachersRoleService.findRoles(teacher);
    let sum = 0;
    myTeacherRoles.forEach(function (role) {
      sum += role.subject.getPayOff();
    });
    return sum + teacher.position.quote;
  }

  static addTeacher(teacher){
    teachers.push(teacher);
  }

}

module.exports = TeacherService;
const Teacher = require('../models/teacher');
