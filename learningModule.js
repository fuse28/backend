var url = "http://xyz.com/";
//logging message
//learning how to export it to other file

function log(message) {
  //send http request
  console.log(message);
}
module.exports.log = log;
