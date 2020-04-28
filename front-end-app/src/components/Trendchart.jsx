import React, { Component } from "react";
import Plot from "react-plotly.js";
class Trendchart extends Component {
  state = { data: [] };
  componentDidMount = () => {
    fetch("/covid-map-data/aggregates")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };
  render() {
    var date = this.state.data.map((val, i) => {
      var dt1 = parseInt(val.Date_uploaded.substring(3, 5));
      var mon1 = parseInt(val.Date_uploaded.substring(0, 2));
      var yr1 = parseInt(val.Date_uploaded.substring(6, 10));
      var date1 = new Date(yr1, mon1 - 1, dt1);
      return date1;
      // return Date.parse(val.Date_uploaded);
    });
    var confirmed = this.state.data.map((val, i) => {
      return val.Confirmed;
    });
    var deaths = this.state.data.map((val, i) => {
      return val.Deaths;
    });
    var recovered = this.state.data.map((val, i) => {
      return val.Recovered;
    });
    return (
      <div id="trendchart">
        <Plot
          data={[
            {
              x: date ? date : 0,
              y: confirmed ? confirmed : 0,
              type: "scatter",
              mode: "markers",
              line: { color: "#FF0266" },
              name: "Confirmed Cases",
            },
            {
              x: date ? date : 0,
              y: deaths ? deaths : 0,
              type: "scatter",
              mode: "markers",
              line: { color: "#923FF7" },
              name: "Death Cases",
            },
            {
              x: date ? date : 0,
              y: recovered ? recovered : 0,
              type: "scatter",
              mode: "markers",
              line: { color: "03DAC5" },
              name: "Recovered Cases",
            },
          ]}
          layout={{
            width: "700",
            height: "400",
            plot_bgcolor: "#121212",
            paper_bgcolor: "#121212",
            grid: false,
            title: {
              text: "COVID worldwide trend over time",
              y: 0.9,
              x: 0.5,
              xanchor: "center",
              yanchor: "top",
              font: {
                color: "#C0C0C0",
                size: 20,
              },
            },
            xaxis: {
              type: "date",
            },
            legend: {
              x: 1,
              y: 1,
              traceorder: "normal",
              font: {
                size: 12,
                color: "white",
              },
            },
          }}
        />
      </div>
    );
  }
}

export default Trendchart;
