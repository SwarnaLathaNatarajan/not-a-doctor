import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "../datepicker.css";
import Plot from "react-plotly.js";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../tabs.css";
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
      "/api/count-info/?from=" +
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
    fetch("/api/count-info/?from=" + start + "&to=" + end)
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
      <div id="trend">
        <div className="desc">
          <h1>Social Media Trend Analysis</h1>
          <p>
            <center>
              In this module, we have analyzed the impact of COVID-19 on Search
              trends of popular social media platforms such as Twitter, Reddit
              and Google.<br></br> The analysis can be fine-grained to a
              particular time period by selecting the to and from dates below.
            </center>
          </p>
        </div>
        <div id="datepickers">
          <button
            id="checkTrend"
            onClick={this.handleClick(
              this.parseDate(this.state.startDate),
              this.parseDate(this.state.endDate)
            )}
          >
            Check Trend
          </button>
          <div id="topicker">
            To
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
          </div>
          <div id="frompicker">
            From
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
          </div>
        </div>
        <Tabs TabIndicatorProps={{ style: { background: "black" } }}>
          <TabList>
            <Tab id="Twitter">
              {" "}
              <img
                src={require("../images/twitter.png")}
                alt="Twitter"
                height="40"
                width="40"
              />
            </Tab>
            <Tab id="Reddit">
              {" "}
              <img
                src={require("../images/reddit.png")}
                alt="Reddit"
                height="40"
                width="40"
              />
            </Tab>
            <Tab id="Google">
              <img
                src={require("../images/google.png")}
                alt="Google"
                height="40"
                width="40"
              />
            </Tab>
          </TabList>
          <TabPanel>
            <Plot
              data={[
                {
                  x: date ? date : 0,
                  y: tweets ? tweets : 0,
                  type: "scatter",
                  mode: "markers+lines",
                  line: { color: "#03dac5" },
                  name: "Tweets",
                },
              ]}
              layout={{
                width: 1950,
                height: 730,
                plot_bgcolor: "#121212",
                paper_bgcolor: "#121212",
                grid: false,
                title: {
                  text: "Twitter trend over time",
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
                  title: "Time",
                  titlefont: {
                    size: 15,
                    color: "#C0C0C0",
                  },
                  tickfont: {
                    size: 15,
                    color: "#C0C0C0",
                  },
                },
                yaxis: {
                  title: "Count",
                  titlefont: {
                    size: 15,
                    color: "#C0C0C0",
                  },
                  tickfont: {
                    size: 15,
                    color: "#C0C0C0",
                  },
                },
                hoverlabel: {
                  font: {
                    size: 20,
                  },
                },
              }}
            />
          </TabPanel>
          <TabPanel>
            <Plot
              data={[
                {
                  x: date ? date : 0,
                  y: reddit ? reddit : 0,
                  type: "scatter",
                  mode: "markers+lines",
                  line: { color: "#ff0266" },
                  name: "Reddit submissions",
                },
              ]}
              layout={{
                width: 1950,
                height: 730,
                plot_bgcolor: "#121212",
                paper_bgcolor: "#121212",
                grid: false,
                title: {
                  text: "Reddit trend over time",
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
                  title: "Time",
                  titlefont: {
                    size: 15,
                    color: "#C0C0C0",
                  },
                  tickfont: {
                    size: 15,
                    color: "#C0C0C0",
                  },
                },
                yaxis: {
                  title: "Count",
                  titlefont: {
                    size: 15,
                    color: "#C0C0C0",
                  },
                  tickfont: {
                    size: 15,
                    color: "#C0C0C0",
                  },
                },
                hoverlabel: {
                  font: {
                    size: 20,
                  },
                },
              }}
            />
          </TabPanel>
          <TabPanel>
            <Plot
              data={[
                {
                  x: date ? date : 0,
                  y: google ? google : 0,
                  type: "scatter",
                  mode: "markers+lines",
                  line: { color: "#923ff7" },
                  name: "Google search",
                },
              ]}
              layout={{
                width: 1950,
                height: 730,
                plot_bgcolor: "#121212",
                paper_bgcolor: "#121212",
                grid: false,
                title: {
                  text: "Google search trend over time",
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
                  title: "Time",
                  titlefont: {
                    size: 15,
                    color: "#C0C0C0",
                  },
                  tickfont: {
                    size: 15,
                    color: "#C0C0C0",
                  },
                },
                yaxis: {
                  title: "Count",
                  titlefont: {
                    size: 15,
                    color: "#C0C0C0",
                  },
                  tickfont: {
                    size: 15,
                    color: "#C0C0C0",
                  },
                },
                hoverlabel: {
                  font: {
                    size: 20,
                  },
                },
              }}
            />
          </TabPanel>{" "}
        </Tabs>
      </div>
    );
  }
}

export default Mediatrend;
