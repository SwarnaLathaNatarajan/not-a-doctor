import React from "react";
import Plot from "react-plotly.js";

class Trendchart extends React.Component {
  state = {};
  render() {
    var confirmed = [
      320,
      3095,
      26,
      737,
      1724,
      20126,
      257,
      118,
      255,
      11,
      5,
      12715,
    ];
    var deaths = [320, 3095, 26, 737, 1724, 20126, 257, 118, 255, 11, 5, 12715];
    var recovered = [
      320,
      3095,
      26,
      737,
      1724,
      20126,
      257,
      118,
      255,
      11,
      5,
      12715,
    ];

    return (
      <React.Fragment>
        <div id="div1" style={{ backgroundColor: "#121212" }}>
          <Plot
            data={[
              {
                type: "scattermapbox",
                lon: [
                  -106.4509,
                  -116.5765,
                  -63.4168,
                  -63.7443,
                  -127.6476,
                  -73.5491,
                  -57.6604,
                  -66.4619,
                  -98.8139,
                  -135,
                  -124.8457,
                  -85.3232,
                ],
                lat: [
                  52.9399,
                  53.9333,
                  46.5107,
                  44.6819999999999,
                  53.7267,
                  52.9399,
                  53.1355,
                  46.5653,
                  53.7609,
                  64.2823,
                  64.8255,
                  51.2538,
                ],
                text: [
                  "Saskatchewan, Canada",
                  "Alberta, Canada",
                  "Prince Edward Island, Canada",
                  "Nova Scotia, Canada",
                  "British Columbia, Canada",
                  "Quebec, Canada",
                  "Newfoundland and Labrador, Canada",
                  "New Brunswick, Canada",
                  "Manitoba, Canada",
                  "Yukon, Canada",
                  "Northwest Territories, Canada",
                  "Ontario, Canada",
                ],
                customdata: [confirmed, deaths, recovered],
                mode: "markers",
                marker: {
                  size: confirmed / 5000,
                  color: "red",
                  opacity: 0.5,
                },
                hovertemplate:
                  "<b>%{text}</b><br><br> Confirmed: %{customdata[0]}<br>Deaths : %{customdata[1]}<br>Recovered : %{customdata[2]}<br> <extra></extra>",
                // text: ["Montreal"],
              },
            ]}
            layout={{
              autosize: true,
              hovermode: "closest",
              mapbox: {
                bearing: 0,
                style: "carto-darkmatter",
                accesstoken:
                  "pk.eyJ1Ijoia2VlcnRoaWthcmFqdmVsIiwiYSI6ImNrOWJzd2V3NTAxNDUzbm10enlvdmd4dnUifQ.ylVgtAuLHhOCHYFica7gxA",
                pitch: 0,
                zoom: 1,
              },
            }}
          />
        </div>

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
