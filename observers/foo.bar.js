var ping = require('./ping');

ping.subscribe(data => {
  console.log(data);
})