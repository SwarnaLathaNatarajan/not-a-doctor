import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Plot from "react-plotly.js";
import Mediatrendchart from "./Mediatrendchart";
import { Tabs } from "@yazanaabed/react-tabs";

class Mediatrend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date("01-01-2020"),
      endDate: new Date(),
      // start: new Date("01-01-2020"),
      // end: new Date(),
      data: [],
    };
  }
  componentDidMount = () => {
    fetch(
      "/count-info/?from=" +
        this.parseDate(this.state.startDate) +
        "&to=" +
        this.parseDate(this.state.endDate)
    )
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => Date.parse(a.date_) - Date.parse(b.date_));
        this.setState({ data });
      });
  };
  parseDate(date) {
    return String(
      date.getFullYear().toString() +
        "-" +
        (date.getMonth() + 1).toString().padStart(2, "0") +
        "-" +
        date.getDate().toString().padStart(2, "0")
    );
  }
  handleClick(start, end) {
    fetch("/count-info/?from=" + start + "&to=" + end)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    this.state.data = this.state.data.sort(
      (a, b) => Date.parse(a.date_) - Date.parse(b.date_)
    );
    var date = this.state.data.map((val, i) => {
      return val.date_;
    });
    var tweets = this.state.data.map((val, i) => {
      return val.tweets_count;
    });
    var reddit = this.state.data.map((val, i) => {
      return val.reddit_submissions_count;
    });
    var google = this.state.data.map((val, i) => {
      return val.google_search_count;
    });

    return (
      <div id="datepickers">
        <DatePicker
          dateFormat="MM-dd-yyyy"
          selected={this.state.startDate}
          onChange={(date) =>
            this.setState({
              startDate: date,
            })
          }
          className="datepicker"
          maxDate={this.state.endDate}
        />
        <DatePicker
          dateFormat="MM-dd-yyyy"
          selected={this.state.endDate}
          onChange={(date) =>
            this.setState({
              endDate: date,
            })
          }
          className="datepicker"
          minDate={this.state.startDate}
        />
        <button
          onClick={this.handleClick(
            this.parseDate(this.state.startDate),
            this.parseDate(this.state.endDate)
          )}
        >
          Check Trend
        </button>
        <div style={{ color: "white" }}>
          <br></br>
          {this.parseDate(this.state.startDate)}
          <br></br>
          {this.parseDate(this.state.endDate)}
          <br></br>
          {/* {JSON.stringify(this.state.data)} */}
        </div>

        <div style={{ backgroundcolor: "white" }}>
          <Tabs
            activeTab={{
              id: "Twitter",
            }}
          >
            <Tabs.Tab id="Twitter" title="Twitter" style={{ color: "white" }}>
              <div id="trendchart" style={{ padding: 10 }}>
                <Plot
                  data={[
                    {
                      x: date ? date : 0,
                      y: tweets ? tweets : 0,
                      type: "scatter",
                      mode: "markers+lines",
                      line: { color: "#F4B000" },
                      name: "Tweets",
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
            </Tabs.Tab>
            <Tabs.Tab id="Reddit" title="Reddit" style={{ color: "white" }}>
              <Plot
                data={[
                  {
                    x: date ? date : 0,
                    y: reddit ? reddit : 0,
                    type: "scatter",
                    mode: "markers+lines",
                    line: { color: "#F4B000" },
                    name: "Tweets",
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
            </Tabs.Tab>
            <Tabs.Tab id="Google" title="Google" style={{ color: "white" }}>
              <Plot
                data={[
                  {
                    x: date ? date : 0,
                    y: google ? google : 0,
                    type: "scatter",
                    mode: "markers+lines",
                    line: { color: "#F4B000" },
                    name: "Tweets",
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
            </Tabs.Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Mediatrend;
