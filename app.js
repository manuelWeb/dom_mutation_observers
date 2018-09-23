class Ping{
  constructor() {
    this.observers = []
  }
  subscribe(fn) {
    this.observers.push(fn)
  }
  unsubscribe(fn){
    // filter : si faux elt supp du tableau si vrai elt conservé
    this.observers = this.observers.filter(oberser => oberser != fn)
  }
  fire(data, thisObj){
    // iter sur chaques observer du tableau
    this.observers.forEach(observer => {
      // appel oberser en passant en param l'obj this
      observer.call(thisObj, data)
    });
  }
}
// instance de l'obd
var ping = new Ping();

var handler = function (data) {
  console.log(data);
  console.log(this.message);
}

ping.subscribe(handler);

ping.fire('bye!!!', {message: 'Holã'});
