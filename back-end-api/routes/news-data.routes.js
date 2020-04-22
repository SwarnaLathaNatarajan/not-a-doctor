module.exports = app => {
    const newsData = require("../controllers/news-data.controller.js");
    // Retrieve counts for all dates
    app.get("/news-data", newsData.getNewsWithKeyword);
  };