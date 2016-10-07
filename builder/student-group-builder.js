const StudentGroupService = require('../services/student-group-service');
const groups = require('./data/group-data');

class StudentGroupBuilder {
  static fillGroups(store){
    for(let group in groups){
      store.save(StudentGroupService.create(groups[group].level, groups[group].name));
    }
  }
}

module.exports = StudentGroupBuilder;
