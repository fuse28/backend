const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to server");
});
app.get("/contact", (req, res) => {
  res.send("contact me at aatishavhad07@gmail.com");
});
app.get("/about", (req, res) => {
  res.send("Server is owned by aatish and you better stay away from it");
});
app.get("/hobbies", (req, res) => {
  res.send("<ui><li>coding</li></ui>");
});

app.listen(5000, () => {
  console.log("listening to port 5000");
});
