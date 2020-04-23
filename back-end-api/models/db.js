const { BigQuery } = require("@google-cloud/bigquery");
const projectId = "not-a-doctor-273222";
const keyFilename = "./config/not-a-doctor-273222-900704811727.json";
const bigqueryClient = new BigQuery({ projectId, keyFilename });

module.exports = bigqueryClient;
