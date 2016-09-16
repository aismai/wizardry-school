const Person = require('./common/person');
const ParentService = require('../services/parent-service');

class Parent extends Person {
  constructor(user) {
    super(user);
  }

 save(){
   ParentService.addParent(this);
 }

}

module.exports = Parent;
