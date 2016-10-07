const BaseService = require('./base-service');
const Subject = require('../models/subject');
const store = require('./global-store');



class SubjectService extends BaseService {

  static create(subject){
    return new Subject(subject);
  }

  static getStore(){
    return store.get('Subjects');
  }

  static getPayment(subject){
    return subject.quote * subject.hours;
  }
}

module.exports = SubjectService;