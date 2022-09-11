const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("response successful");
    res.end();
  }

  if (req.url === "/api/numbers") {
    res.write(JSON.stringify([1, 2, 3, 4, 5, 6, 7]));
    res.end();
  }
}); //this server is event emitter , so this wil b having all the capabilities of EventEmitter

// server.on("connection", (socket) => {
//   console.log("new connection");          //Don't use it in real life
// });

server.listen(3000);

console.log("listening on port 3000");
