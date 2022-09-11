const EventEmitter = require("events"); //EventEmitter is a class

class Logger extends EventEmitter {
  //Logger class has all the functionalities defined in Event Emitter
  log(message) {
    console.log(message);
    this.emit("event has occur", { id: 21, url: "http://xyz.com/" });
  }
}
module.exports = Logger;
