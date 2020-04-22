const bigqueryClient = require("./db.js");

const NewsData = function(newsData) {
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
  async function queryGetNewsWithKeyword()
  {
    const sqlQuery = `SELECT *
        FROM \`not-a-doctor-273222.Topic_Modelling.NewsData\` 
        WHERE title LIKE \'%${req.query.topic}%\'`;
    const options = {
      query: sqlQuery,
      location: 'US'
      };
    const [rows] = await bigqueryClient.query(options);
    console.log("GetAll News Map Data api called!");
    result(null, rows);
  }
  queryGetNewsWithKeyword();
};

module.exports = NewsData;