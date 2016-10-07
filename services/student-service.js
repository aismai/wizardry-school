const BaseService = require('./base-service');

class StudentService extends BaseService {
  static create(user){
    return new Student(user);
  }

  static getStore(){
    return store.get('Students');
  }
}

module.exports = StudentService;
const Student = require('../models/student');
