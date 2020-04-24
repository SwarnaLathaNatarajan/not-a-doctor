const covidMapData = require("../models/covid-map-data.model.js");

// Retrieve covid map data for late update 
exports.getLastUpdated = (req, res) => {
    covidMapData.getLastUpdated(req, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving covid map data."
          });
        else res.send(data);
      });
};

// Get aggregate info
exports.getAggregates = (req, res) => {
  covidMapData.getAggregates(req, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving aggregate covid map data."
        });
      else res.send(data);
    });
};