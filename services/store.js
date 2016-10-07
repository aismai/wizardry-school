class Store extends Map {
  constructor(){
    super(...arguments);
  }

  getCounter(){
    this.counter = ( this.counter || 0) + 1;
    return this.counter;
  }

  findBy(field, param) {
    let callBack;
    this.forEach(function(elem){
      if(elem[field] === param) {
        callBack = elem;
      }
    });
    return callBack;
  }

  findById(id){
    return this.get(id);
  }

  removeById(id){
    this.delete(id);
  }

  add(object){
    this.set(this.getCounter(), object);
  }

  save(object){
    let collection = object.constructor.name + 's';

    if(this.has(collection)){
      this.get(collection).set(this.get(collection).getCounter(), object);
    } else {
      // this.set(collection, new Store().set(this.getCounter(), object));
      throw new Error(`Couldn't find collection: ${collection}`);
    }

  }
}

module.exports = Store;
