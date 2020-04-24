const countInfo = require("../models/resource-tracker.model.js");

exports.getResourceInfo = (req, res) => {
  countInfo.getResourceInfo(req, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving count information.",
      });
    else res.send(data);
  });
};
