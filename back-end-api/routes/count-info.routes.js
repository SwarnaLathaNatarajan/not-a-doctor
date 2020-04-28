module.exports = app => {
    const countInfo = require("../controllers/count-info.controller.js");
    // Retrieve counts for all dates
    app.get("/api/count-info", countInfo.getCountsBetweenDates);
  };