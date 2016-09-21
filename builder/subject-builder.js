const Subject = require('../models/subject');

class SubjectBuilder {
  static create(name, level, hours, quote){
    return new Subject(name, level, hours, quote);
  }
}

module.exports = SubjectBuilder;