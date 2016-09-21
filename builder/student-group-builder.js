const StudentGroupService = require('../services/student-group-service');
const groups = require('./data/group-data');

class StudentGroupBuilder {
  static create(level, name){
    return StudentGroupService.create(level, name);
  }

  static fillGroups(){
    for(let group in groups){
      let newGroup = StudentGroupService.create(groups[group].level, groups[group].name);
      StudentGroupService.addGroup(newGroup);
    }
  }
}

module.exports = StudentGroupBuilder;
