module.exports = (app) => {
  const resourceInfo = require("../controllers/resource-tracker.controller.js");
  app.get("/resource-tracker", resourceInfo.getResourceInfo);
};
