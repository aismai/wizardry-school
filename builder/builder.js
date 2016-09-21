const StudentBuilder = require('./student-builder');
const TeacherBuilder = require('./teacher-builder');
const BookBuilder = require('./book-builder');
const SubjectBuilder = require('./subject-builder');
const StudentGroupBuilder = require('./student-group-builder');

class Builder {
  static run(){
    StudentBuilder.fillStudents();
    StudentGroupBuilder.fillGroups();
  }
}

module.exports = Builder;