const { BigQuery } = require("@google-cloud/bigquery");
const projectId = "not-a-doctor-273222";
const keyFilename = "./models/config/not-a-doctor-273222-428f363ede97.json";
const bigqueryClient = new BigQuery({ projectId, keyFilename });

module.exports = bigqueryClient;
