const bigqueryClient = require("./db.js");

const CovidMapData = function (covidMapData) {
  this.Admin2 = covidMapData.Admin2;
  this.Province_State = covidMapData.Province_State;
  this.Country_Region = covidMapData.Country_Region;
  this.Last_Update = covidMapData.Last_Update;
  this.Lat = covidMapData.Lat;
  this.Long_ = covidMapData.Long_;
  this.Confirmed = covidMapData.Confirmed;
  this.Deaths = covidMapData.Deaths;
  this.Recovered = covidMapData.Recovered;
  this.Active = covidMapData.Active;
  this.Combined_Key = covidMapData.Combined_Key;
  this.Date_Uploaded = covidMapData.Uploaded;
};

CovidMapData.getLastUpdated = (req, result) => {
  async function queryGetLastUpdated() {
    const sqlQuery = `SELECT *
        FROM \`not-a-doctor-273222.Topic_Modelling.CovidData\`
        WHERE Date_uploaded = (select MAX(Date_uploaded) from \`not-a-doctor-273222.Topic_Modelling.CovidData\`)`;
    const options = {
      query: sqlQuery,
      location: "US",
    };
    const [rows] = await bigqueryClient.query(options);
    console.log("Get Last Updated Covid Map Data api called!");
    result(null, rows);
  }
  queryGetLastUpdated();
};

CovidMapData.getLastUpdatedAggregates = (req, result) => {
  async function queryGetLastUpdatedAggregates() {
    const sqlQuery = `SELECT Country_Region, SUM(Confirmed) as Confirmed, SUM(Deaths) as Deaths, SUM(Recovered) as Recovered, SUM(Active) as Active
        FROM \`not-a-doctor-273222.Topic_Modelling.CovidData\`
        WHERE Date_uploaded = (select MAX(Date_uploaded) from \`not-a-doctor-273222.Topic_Modelling.CovidData\`)
        GROUP BY Country_Region 
        ORDER BY Confirmed DESC`;
    const options = {
      query: sqlQuery,
      location: "US",
    };
    const [rows] = await bigqueryClient.query(options);
    console.log("Get Last Updated Covid Map Data api called!");
    result(null, rows);
  }
  queryGetLastUpdatedAggregates();
};

CovidMapData.getAggregates = (req, result) => {
  async function queryGetAggregates() {
    const sqlQuery = `SELECT Date_uploaded, SUM(Confirmed) as Confirmed, SUM(Deaths) as Deaths, SUM(Recovered) as Recovered, SUM(Active) as Active
        FROM \`not-a-doctor-273222.Topic_Modelling.CovidData\`
        GROUP BY Date_uploaded`;
    const options = {
      query: sqlQuery,
      location: "US",
    };
    const [rows] = await bigqueryClient.query(options);
    console.log("Get Aggregates Covid Map Data api called!");
    result(null, rows);
  }
  queryGetAggregates();
};
module.exports = CovidMapData;
