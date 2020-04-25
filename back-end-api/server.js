const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Not-a-doctor api application." });
});

require("./routes/count-info.routes.js")(app);
require("./routes/covid-map-data.routes.js")(app);
require("./routes/news-data.routes.js")(app);
// require("./routes/resource-tracker.routes.js")(app);

// set port, listen for requests
app.listen(9000, () => {
  console.log("Server is running on port 9000.");
});
