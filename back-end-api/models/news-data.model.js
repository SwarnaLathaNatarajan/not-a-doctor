const bigqueryClient = require("./db.js");
const csv = require("csv-parser");
const fs = require("fs");

const NewsData = function (newsData) {
  this.Author = newsData.Author;
  this.Content = newsData.Content;
  this.Description = newsData.Description;
  this.publishedAt = newsData.publishedAt;
  this.source = newsData.source;
  this.title = newsData.title;
  this.url = newsData.url;
  this.urlToImage = newsData.urlToImage;
};

NewsData.getNewsWithKeyword = (req, result) => {
  async function queryGetNewsWithKeyword() {
    const sqlQuery = `SELECT DISTINCT *
        FROM \`not-a-doctor-273222.Topic_Modelling.NewsData\` 
        WHERE title LIKE \'%${req.query.topic}%\'`;
    const options = {
      query: sqlQuery,
      location: "US",
    };
    const [rows] = await bigqueryClient.query(options);
    console.log("GetAll News Map Data api called!");
    result(null, rows);
  }
  queryGetNewsWithKeyword();
};

NewsData.getTopics = (req, result) => {
  var results = [];
  async function querygetTopics() {
    fs.createReadStream("./news-data/" + req.query.filename + ".csv")
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        result(null, results);
      });
  }
  querygetTopics();
};

module.exports = NewsData;
