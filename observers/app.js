// instance de l'obd
var ping = require('./ping')
require('./foo.bar')

ping.fire('bye!!!');

var handler = function (data) {
  console.log(data * data);
}

ping.subscribe(handler);

ping.fire(8);

ping.unsubscribe(handler)

ping.fire(4);
