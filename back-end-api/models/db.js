const { BigQuery } = require("@google-cloud/bigquery");
const projectId = "not-a-doctor-273222";
const keyFilename = ""; 
const bigqueryClient = new BigQuery({ projectId, keyFilename });

module.exports = bigqueryClient;
