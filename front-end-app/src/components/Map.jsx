import React from "react";
import Plot from "react-plotly.js";

class Trendchart extends React.Component {
  state = { data: [], trend: [] };
  componentDidMount = () => {
    fetch("/covid-map-data/last-updated")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
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
        <div id="map_div">
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
              title: {
                text: "COVID worldwide",
                xanchor: "center",
                yanchor: "top",
                font: {
                  color: "#C0C0C0",
                  family: "Roboto, sans-serif",
                  size: 30,
                },
              },
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
      </React.Fragment>
    );
  }
}

export default Trendchart;
