const TeachersRoleService = require('../services/teachers-role-service');

class TeachersRole {
  constructor(subject, teacher){
    this.setSubject(subject);
    this.setTeacher(teacher);
  }
  setSubject(subject){
    this.subject = subject;
  }

  getSubject(){
    return this.subject;
  }

  setTeacher(teacher){
    this.teacher = teacher;
  }

  getTeacher(){
    return this.teacher
  }

  save(){
    TeachersRoleService.add(this);
  }
}

module.exports = TeachersRole;
