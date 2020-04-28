const { BigQuery } = require("@google-cloud/bigquery");
const projectId = "not-a-doctor-273222";
const keyFilename = "./models/config/not-a-doctor-273222-9a8c7f7e9340.json";
const bigqueryClient = new BigQuery({ projectId, keyFilename });

module.exports = bigqueryClient;
