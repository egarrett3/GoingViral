const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
let d3 = require("d3");


app.use(express.static("dist"));

app.get("/", (request, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});


app.get("/graph/:state", (request, response) => {
  const state = request.params.state;
  const api_url = `https://api.covidtracking.com/v1/states/${state}/daily.json`;
  fetch(api_url)
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      debugger
      let results = d3.csvParse(text);
      console.log(results); 
      response.send(results); 
    });
});

app.get("/nation", (request, response) => {
  const api_url = `https://api.covidtracking.com/v1/us/daily.json`;
  fetch(api_url)
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      debugger
      let results = d3.csvParse(text);
      console.log(results); 
      response.send(results); 
    });
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
});