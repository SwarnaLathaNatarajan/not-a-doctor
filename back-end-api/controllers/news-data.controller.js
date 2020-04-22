const newsData = require("../models/news-data.model.js");

// Retrieve news articles with topic in title.
exports.getNewsWithKeyword = (req, res) => {
    newsData.getNewsWithKeyword(req, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving news data."
          });
        else res.send(data);
      });
};