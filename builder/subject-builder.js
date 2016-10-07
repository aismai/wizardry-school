const subjects = require('./data/subject-data');
const SubjectService = require('../services/subject-service');

class SubjectBuilder {
  static fillSubjects(store){
    for(let subject in subjects){
      store.save(SubjectService.create(subjects[subject]));
    }
  }
}

module.exports = SubjectBuilder;