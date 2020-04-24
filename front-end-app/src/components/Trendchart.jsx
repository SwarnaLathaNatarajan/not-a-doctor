import React from "react";
import Plot from "react-plotly.js";

class Trendchart extends React.Component {
  state = { data: [] };
  componentDidMount = () => {
    fetch("/covid-map-data/last-updated")
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .then((data) => console.log(data));
  };
  render() {
    function unpack(rows, key) {
      return rows.map(function (row) {
        return row[key];
      });
    }
    function unpack_bubble(rows) {
      return rows.map(function (row) {
        return row["Confirmed"] / 100;
      });
    }
    return (
      <React.Fragment>
        <div
          id="div1"
          style={{ height: "100%", width: "100%", backgroundColor: "black" }}
        >
          <Plot
            data={[
              {
                type: "scattermapbox",
                lon: unpack(this.state.data, "Long_"),
                lat: unpack(this.state.data, "Lat"),
                text: unpack(this.state.data, "Combined_Key"),
                customdata: unpack(this.state.data, "Confirmed"),
                meta: unpack(this.state.data, "Deaths"),
                texttemplate: unpack(this.state.data, "Recovered"),
                // ],

                mode: "markers",
                marker: {
                  size: unpack_bubble(this.state.data),
                  sizemode: "area",
                  color: "red",
                  opacity: 0.3,
                },
                hovertemplate:
                  "<b>%{text}</b><br><br>" +
                  "Confirmed: %{customdata}<br>" +
                  "Deaths : %{meta}<br>" +
                  "Recovered : %{texttemplate}<br> <extra></extra>",
              },
            ]}
            layout={{
              autosize: false,
              width: 1500,
              height: 800,
              plot_bgcolor: "black",
              paper_bgcolor: "black",
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
        </div>{" "}
        }
        {/*
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
        </div> */}
      </React.Fragment>
    );
  }
}

export default Trendchart;
