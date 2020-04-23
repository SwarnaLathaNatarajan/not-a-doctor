module.exports = app => {
    const covidMapData = require("../controllers/covid-map-data.controller.js");
    // Retrieve counts for all dates
    app.get("/covid-map-data", covidMapData.getLastUpdated);
  };