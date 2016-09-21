const Teacher = require('../models/teacher');

class TeacherBuilder {
  static create(user, position){
    return new Teacher(user, position)
  }
}

module.exports = TeacherBuilder;