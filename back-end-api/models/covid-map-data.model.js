const bigqueryClient = require("./db.js");

const CovidMapData = function(covidMapData) {
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
  async function queryGetLastUpdated()
  {
    const sqlQuery = `SELECT *
        FROM \`not-a-doctor-273222.Topic_Modelling.CovidData\`
        WHERE Date_uploaded = (select MAX(Date_uploaded) from \`not-a-doctor-273222.Topic_Modelling.CovidData\`)`;
    const options = {
      query: sqlQuery,
      location: 'US'
      };
    const [rows] = await bigqueryClient.query(options);
    console.log("GetAll Covid Map Data api called!");
    result(null, rows);
  }
  queryGetLastUpdated();
};

module.exports = CovidMapData;