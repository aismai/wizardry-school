const Store = require('../services/store');
const BaseService = require('./base-service');

const parents = new Store();

class ParentService extends BaseService{
  static create(user){
    return new Parent(user);
  }

  static getStore(){
    return parents;
  }

}

module.exports = ParentService;
const Parent = require('../models/parent');
