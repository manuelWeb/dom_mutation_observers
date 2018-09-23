// instance de l'obd
var ping = new Ping();

var handler = function (data) {
  console.log(data);
  console.log(this.message);
}

ping.subscribe(handler);

ping.fire('bye!!!', {message: 'Holã'});
