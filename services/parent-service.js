const parents = [];

class ParentService {
  static create(user){
    return new Parent(user);
  }

  static findAll(){
    let array = [];
    return parents.concat(array);
  }

  static findByName(name){
    return parents.filter(function (parent) {
      return parent.name === name;
    })
  }

  static findBy(field, param){
    return parents.filter(function (parent) {
      return parent[field] === param;
    })
  }

  static removeByName(name){
    let obj =  parents.find(function (parent) {
      return parent.name === name;
    });
    let i = parents.indexOf(obj);
    if(i != -1) parents.splice(i, 1);
  }

  static addParent(parent) {
    parents.push(parent);
  }
}

module.exports = ParentService;
const Parent = require('../models/parent');
