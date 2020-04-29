module.exports = (app) => {
  const newsData = require("../controllers/news-data.controller.js");
  // Retrieve news with keyword
  app.get("/api/news-data/get-news", newsData.getNewsWithKeyword);
  // Retrieve topics for the day
  app.get("/api/news-data/get-topics", newsData.getTopics);
};
