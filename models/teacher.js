const Person = require('./common/person');
const Subject = require('./subject');
const Position = require('./position');

class Teacher extends Person {
  constructor(user, position) {
    super(user);
    this.setPosition(position);
    this.subjects = [];
    // this.setSubjects(subjects);
    // this.setPositions(positions);
  }

  setSubjects(subjects){
    this.subjects = subjects;
  }

  getSubjects(){
    return this.subjects;
  }

  addSubject(subject) {
    this.subjects.push(subject);
  }

  setPosition(position){
    this.position = position;
  }
  getPosition(){
    return this.position;
  }

}

module.exports = Teacher;