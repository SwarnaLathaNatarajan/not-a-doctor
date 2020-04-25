const resourceInfo = require("../models/resource-tracker.model.js");

exports.getResourceInfo = (req, res) => {
  resourceInfo.getResourceInfo(req, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving resource information.",
      });
    else res.send(data);
  });
};
