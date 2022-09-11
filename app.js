const EventEmitter = require("events"); //EventEmitter is a class

const emitter = new EventEmitter(); //emitter is a object(instance)

const logger = require("./learningModule");

logger.log("hey learning node");

function log(message) {
  console.log(message);
}

module.exports = log;
