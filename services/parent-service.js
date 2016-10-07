const BaseService = require('./base-service');
const store = require('./global-store');


class ParentService extends BaseService{
  static create(user){
    return new Parent(user);
  }

  static getStore(){
    return store.get('Parents');
  }
}

module.exports = ParentService;
const Parent = require('../models/parent');
