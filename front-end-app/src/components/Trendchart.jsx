import React from "react";
import Plot from "react-plotly.js";

class Trendchart extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="div2" style={{ backgroundColor: "#121212" }}>
          <Plot
            data={[
              {
                x: [
                  "2020-04-15",
                  "2020-04-16",
                  "2020-04-17",
                  "2020-04-18",
                  "2020-04-19",
                  "2020-04-20",
                  "2020-04-21",
                ],
                y: [
                  2056055,
                  2152647,
                  2240191,
                  2317759,
                  2401379,
                  2472259,
                  2561044,
                ],
                name: "Confirmed Cases",
                type: "scatter",
                mode: "lines+markers",
                line: { color: "#F4B000" },
                hovertemplate:
                  "<b>%{y}</b> confirmed cases on %{x}<extra></extra>",
              },
              {
                x: [
                  "2020-04-15",
                  "2020-04-16",
                  "2020-04-17",
                  "2020-04-18",
                  "2020-04-19",
                  "2020-04-20",
                  "2020-04-21",
                ],
                name: "Deaths",
                y: [134177, 143801, 153822, 159510, 165044, 169986, 176984],
                type: "scatter",
                mode: "lines+markers",
                line: { color: "#870000" },
                hovertemplate:
                  "<b>%{y}</b> confirmed cases on %{x}<extra></extra>",
              },
              {
                x: [
                  "2020-04-15",
                  "2020-04-16",
                  "2020-04-17",
                  "2020-04-18",
                  "2020-04-19",
                  "2020-04-20",
                  "2020-04-21",
                ],
                name: "Recovered",
                y: [511019, 542107, 568343, 592319, 623903, 645738, 679819],
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
        </div>
      </React.Fragment>
    );
  }
}

export default Trendchart;
