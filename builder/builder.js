const SubjectBuilder = require('./subject-builder');
const StudentGroupBuilder = require('./student-group-builder');
const Store = require('../services/store');

const globalStore = require('../services/global-store');

class Builder {

  static buildStore(){
    globalStore.set('Subjects', new Store());
    globalStore.set('StudentGroups', new Store());
  }

  static run(){
    Builder.buildStore();
    SubjectBuilder.fillSubjects(globalStore);
    StudentGroupBuilder.fillGroups(globalStore);
  }
}

module.exports = Builder;