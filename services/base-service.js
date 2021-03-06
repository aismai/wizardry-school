class BaseService {
  static getAll() {
    return this.getStore();
  }

  getStore(){
    throw new Error(`Must be implemented.`);
  }

  static add(object) {
    this.getStore().add(object);
  }

  static findBy(field, param){
    return this.getStore().findBy(field, param);
  }

  static findById(id){
    return this.getStore().findById(id);
  }

  static removeById(id){
    this.getStore().removeById(id);
  }
}

module.exports = BaseService;