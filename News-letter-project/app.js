const express = require("express");
const bodyParser = require("body-parser");
const http = require("https");
const { request } = require("http");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signUp.html");
});

app.post("/", (req, res) => {
  const firstName = req.body.firstName;
  const email = req.body.mail;
  const lastName = req.body.lastName;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const url = "https://us11.api.mailchimp.com/3.0/lists/9128442921";

  const jsonData = JSON.stringify(data);

  const options = {
    method: "POST",
    auth: "Aatish:qwed93f3475683818e2ee494e2972cd0996-us11",
  };

  const request = http.request(url, options, (response) => {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", (req, res) => {
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});

//API key
// d93f3475683818e2ee494e2972cd0996-us11

//List ID
//9128442921
