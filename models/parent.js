const Person = require('./common/person');
const ParentService = require('../services/parent-service');

class Parent extends Person {
  constructor(user) {
    super(user);
  }

 save(){
   ParentService.add(this);
 }

}

module.exports = Parent;
