const Position = require('../models/position');
const positions = [];

class PositionService{
  static create(quote, name){
    return new Position(quote, name);
  }

  static findAll(){
    let array = [];
    return positions.concat(array);
  }

  static findBy(field, param){
    return positions.filter(function (position) {
      return position[field] === param;
    })
  }

  static removeByName(name){
    let obj =  positions.find(function (position) {
      return position.name === name;
    });
    let i = books.indexOf(obj);
    if(i != -1) books.splice(i, 1);
  }

  static addPosition(position){
    positions.push(position);
  }
}

module.exports = PositionService;
