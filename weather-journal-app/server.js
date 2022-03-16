// Setup empty JS object to act as endpoint for all routes

let projectData = {};

// Require Express to run server and routes

// Requiring express

const express = require("express");

// Requiring body-parser

const bodyParser = require("body-parser");

// Requiring cors

const cors = require("cors");

// Start up an instance of app

const app = express();

/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Cors for cross origin allowance

app.use(cors());

// Initialize the main project folder

app.use(express.static("website"));

// Setup Server

// Declaring a port to listen to ...

const port = 5050;

// Listening to our port ...

app.listen(port, () => {
  console.log(`Server running at : http://localhost:${port}`);
});

// posting data to the endpoint /post using method post .

app.post("/all", (req, res) => {
  projectData = {
    date: req.body.datee,
    temp: req.body.tempp,
    content: req.body.feels,
  };
  res.end();
});

// Get all data needed from the endpoint /post to show it the the user by using method get .

app.get("/post", (_, res) => {
  res.send(projectData);
});
