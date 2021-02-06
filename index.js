const fs = require("fs");
const path = require("path");
const moment = require("moment");
const express = require('express');

const config = require("./config.json")
const DarkSky = require("./DarkSkyApi");

const app = express();
const PORT_NUMBER = config.PORT;
const http = require('http').Server(app);

// Configure Express

const darkSky = new DarkSky();

// Middleware to log requests
app.use("/", async (req, res, next) => {
  console.log(moment().format("MM/DD/YYYY HH:mm:ss"), "REQUEST", req.originalUrl);
  next();
});


// Configure Routing
app.get('/', (req, res) => {
  return res.send("Dark Sky Microservice is up.");
});

app.get('/forecast', async (req, res) => {
  const latLongString = req.query.latLong;
  const futureDate = (req.query.futureDate) ? req.query.futureDate : "";
  return res.send(
    await darkSky.getForecast(latLongString, futureDate)
  );
});

// Express-Server Start Up
http.listen(PORT_NUMBER, async () => {
  console.log(`listening on *:${PORT_NUMBER}`);
});