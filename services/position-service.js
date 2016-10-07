const Position = require('../models/position');
const BaseService = require('./base-service');
const store = require('./global-store');

class PositionService extends BaseService {
  static create(quote, name){
    return new Position(quote, name);
  }

  static getStore(){
    return store.get('Positions');
  }
}

module.exports = PositionService;
