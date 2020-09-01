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

app.get("graph/:state", (request, response) => {
  debugger
  // make api call using fetch
  fetch (
    `http://coronavirusapi.com/getTimeSeries/${state}`
  )
    .then((response) => {
      return response.text();
    })
    .then((text) => {
      let results = d3.csvParse(text);
      console.log(results); // logs to server
      response.send(results); // sends to frontend
    });
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
});