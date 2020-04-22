import React from "react";
import Plot from "react-plotly.js";

class Trendchart extends React.Component {
  state = { data: [] };
  componentDidMount = () => {
    fetch("/covid-map-data")
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .then((data) => console.log(data));
  };
  render() {
    var date = this.state.data.map((val, i) => {
      return val.Last_Update;
    });
    var confirmed = this.state.data.map((val, i) => {
      return val.Confirmed;
    });
    var death = this.state.data.map((val, i) => {
      return val.Deaths;
    });
    var recovered = this.state.data.map((val, i) => {
      return val.Recovered;
    });
    return (
      <React.Fragment>
        <div id="div2" style={{ backgroundColor: "#121212" }}>
          {this.state.data ? (
            <Plot
              data={[
                {
                  x: date ? date : 0,
                  y: confirmed ? confirmed : 0,
                  name: "Confirmed Cases",
                  type: "scatter",
                  mode: "lines+markers",
                  line: { color: "#F4B000" },
                  hovertemplate:
                    "<b>%{y}</b> confirmed cases on %{x}<extra></extra>",
                },
                {
                  x: date ? date : 0,
                  name: "Deaths",
                  y: death ? death : 0,
                  type: "scatter",
                  mode: "lines+markers",
                  line: { color: "#870000" },
                  hovertemplate:
                    "<b>%{y}</b> confirmed cases on %{x}<extra></extra>",
                },
                {
                  x: date ? date : 0,
                  name: "Recovered",
                  y: recovered ? recovered : 0,
                  type: "scatter",
                  mode: "lines+markers",
                  line: { color: "#008000" },
                  hovertemplate:
                    "<b>%{y}</b> confirmed cases on %{x}<extra></extra>",
                },
              ]}
              layout={{
                width: 800,
                height: 500,
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
                template: "react_plotly_dark",
                theme: { dark: true },
                autosize: true,
                showlegend: true,
                legend_orientation: "v",
                // paper_bgcolor: "rgba(0,0,0,0)",
                // plot_bgcolor: "rgba(0,0,0,0)",
                hoverlabel: {
                  bgcolor: "rgba(0,0,0,1)",
                  bordercolor: "rgba(200,200,200,1)",
                },
                // yaxis: {
                //   type: "linear",
                //   showgrid: true,
                // },
                xaxis: {
                  type: "date",
                  tickformat: "%d %b %y",
                  //   nticks: 4,
                  //   autorange: false,
                  fixedrange: true, // true disables range selection on main graph
                  showgrid: false,
                },
                legend: {
                  orientation: "h",
                  y: -0.3,
                  yanchor: "bottom",
                  x: 0,
                  xanchor: "left",
                },
              }}
            />
          ) : (
            <div></div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Trendchart;
