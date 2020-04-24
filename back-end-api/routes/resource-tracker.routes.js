module.exports = (app) => {
  const countInfo = require("../controllers/resource-tracker.controller.js");
  // Retrieve counts for all dates
  app.get("/resource-tracker", countInfo.getCountsBetweenDates);
};
