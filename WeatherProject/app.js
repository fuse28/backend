const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const query = req.body.city;
  const apiKey = "7612c69d5f5396509117db50ab394225";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  https.get(url, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const weatherDes = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const temp = weatherData.main.temp;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<h1>The weather here is " + weatherDes + "</h1>");
      res.write("<h2>temperature here is" + temp + " degree Celcius");
      res.write("<img src=" + imageURL + "/>");
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
