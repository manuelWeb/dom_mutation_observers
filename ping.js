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
// export d'une instance de la class Ping
// les fnalité de node font que à l'import l'obsever ne sera pas réinstancié
// ce qui permet de faire communiquer les fichiers entre eux sans avoir besoin
// du pattern singleton
module.exports = new Ping();