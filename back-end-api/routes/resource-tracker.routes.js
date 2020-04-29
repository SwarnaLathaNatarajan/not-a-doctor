module.exports = (app) => {
  const resourceInfo = require("../controllers/resource-tracker.controller.js");
  app.get("/api/resource-tracker", resourceInfo.getResourceInfo);
};
