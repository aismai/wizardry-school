const Teacher = require('./teacher');
const Subject = require('./subject');

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

}

module.exports = TeachersRole;