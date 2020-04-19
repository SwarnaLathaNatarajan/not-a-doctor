const bigqueryClient = require("./db.js");

const CountInfo = function(countinfo) {
  this.date = countinfo.date;
  this.reddit_submission_count = countinfo.reddit_submission_count;
  this.tweets_count = countinfo.tweets_count;
  this.google_search_count = countinfo.google_search_count;
};


CountInfo.getCountsBetweenDates = (req, result) => {
  async function queryGetCountsBetweenDates()
  {
    const sqlQuery = `SELECT *
        FROM \`not-a-doctor-273222.Topic_Modelling.COUNTS\`
        WHERE date_ >= \'${req.query.from}\' AND date_ <= \'${req.query.to}\'`;
    const options = {
      query: sqlQuery,
      location: 'US'
      };
    const [rows] = await bigqueryClient.query(options);
    console.log("GetCountsBetweenDates api called!");
    result(null, rows);
  }
  queryGetCountsBetweenDates();
};

module.exports = CountInfo;