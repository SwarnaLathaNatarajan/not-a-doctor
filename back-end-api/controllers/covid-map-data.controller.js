const covidMapData = require("../models/covid-map-data.model.js");

// Retrieve counts for all dates from the database.
exports.getAll = (req, res) => {
    covidMapData.getAll(req, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving covid map data."
          });
        else res.send(data);
      });
};