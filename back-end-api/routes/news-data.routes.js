module.exports = app => {
    const newsData = require("../controllers/news-data.controller.js");
    // Retrieve news with keyword
    app.get("/news-data/get-news", newsData.getNewsWithKeyword);
    // Retrieve topics for the day
    app.get("/news-data/get-topics", newsData.getTopics);
  };