const EventEmitter = require("events"); //EventEmitter is a class

const Logger = require("./similarClassEvents");
const logger = new Logger();

//register a listener
logger.on("event has occur", function (e) {
  console.log("listener called", e);
});

//order is important

//raise an event
logger.emit("event has occur", { id: 21, url: "http://xyz.com/" });

//creating a class of similar events

logger.log("hello");
