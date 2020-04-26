const { BigQuery } = require("@google-cloud/bigquery");
const projectId = "not-a-doctor-273222";
const keyFilename = "./models/config/not-a-doctor-273222-aded9c325661.json";
const bigqueryClient = new BigQuery({ projectId, keyFilename });

module.exports = bigqueryClient;
