const {BigQuery} = require('@google-cloud/bigquery');
const projectId = 'not-a-doctor-273222'
const keyFilename = './config/not-a-doctor-273222-4ff68058dcd0.json'
const bigqueryClient = new BigQuery({projectId, keyFilename});

module.exports = bigqueryClient;