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
      return val.Date_uploaded;
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
              mode: "lines+markers",
              line: { color: "#F4B000" },
              name: "Confirmed Cases",
            },
            {
              x: date ? date : 0,
              y: deaths ? deaths : 0,
              type: "scatter",
              mode: "lines+markers",
              line: { color: "#870000" },
              name: "Death Cases",
            },
            {
              x: date ? date : 0,
              y: recovered ? recovered : 0,
              type: "scatter",
              mode: "lines+markers",
              line: { color: "#008000" },
              name: "Recovered Cases",
            },
          ]}
          layout={{
            width: "700",
            height: "400",
            plot_bgcolor: "black",
            paper_bgcolor: "black",
            grid: false,
            title: {
              text: "COVID worldwide trend over time",
              y: 0.9,
              x: 0.5,
              xanchor: "center",
              yanchor: "top",
              font: {
                color: "#C0C0C0",
                family: "Roboto, sans-serif",
                size: 20,
              },
            },
            xaxis: {
              type: "time",
              tickformat: "%d %b %y",
            },
            legend: {
              x: 1,
              y: 1,
              traceorder: "normal",
              font: {
                family: "sans-serif",
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
