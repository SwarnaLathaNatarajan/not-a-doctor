const countInfo = require("../models/count-info.model.js");

// Retrieve counts for all dates from the database.
exports.getCountsBetweenDates = (req, res) => {
    countInfo.getCountsBetweenDates(req, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving count information."
          });
        else res.send(data);
      });
};