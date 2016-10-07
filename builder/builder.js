const SubjectBuilder = require('./subject-builder');
const StudentGroupBuilder = require('./student-group-builder');
const Store = require('../services/store');

const globalStore = require('../services/global-store');

class Builder {

  static buildStore(){
    globalStore.set('Subjects', new Store());
    globalStore.set('StudentGroups', new Store());
    globalStore.set('Students', new Store());
    globalStore.set('Teachers', new Store());
    globalStore.set('TeachersRoles', new Store());
    globalStore.set('Positions', new Store());
    globalStore.set('Positions', new Store());
    globalStore.set('Books', new Store());
  }

  static run(){
    Builder.buildStore();
    SubjectBuilder.fillSubjects(globalStore);
    StudentGroupBuilder.fillGroups(globalStore);
  }
}

module.exports = Builder;
