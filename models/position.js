class Position {
  constructor(quote, name){
    this.setQuote(quote);
    this.setName(name);
  }

  setQuote(quote){
    this.quote = quote;
  }

  getQuote(){
    return this.quote;
  }

  setName(name){
    this.name = name;
  }

  getName(){
    return this.name;
  }
}
module.exports = Position;