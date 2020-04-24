const { BigQuery } = require("@google-cloud/bigquery");
const projectId = "not-a-doctor-273222";
const keyFilename = "./models/config/not-a-doctor-273222-8c0b0ae0ace5.json";
const bigqueryClient = new BigQuery({ projectId, keyFilename });

module.exports = bigqueryClient;
