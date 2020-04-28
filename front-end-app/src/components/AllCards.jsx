import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  StylesProvider,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Scrollbars } from "react-custom-scrollbars";
import ListSubheader from "@material-ui/core/ListSubheader";
import TrendChart from "./Trendchart";

var theme1 = createMuiTheme({
  typography: {
    h3: {
      color: "#FFFFFF",
    },
    h4: {
      color: "#FFFFFF",
    },
    h5: {
      color: "#FFFFFF",
    },
    h6: {
      color: "#FFFFFF",
    },
  },
});

class AllCards extends React.Component {
  state = { data: [], trend: [] };
  componentDidMount = () => {
    fetch("/covid-map-data/last-updated-aggregates")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  render() {
    {
      var Confirmed = this.state.data.map((val, i) => {
        return val.Confirmed + "   |  " + val.Country_Region;
      });

      var Recovered = this.state.data.map((val, i) => {
        return val.Recovered + "   |  " + val.Country_Region;
      });

      var Deaths = this.state.data.map((val, i) => {
        return val.Deaths + "   |  " + val.Country_Region;
      });
      return (
        <div className="container">
          <Grid container spacing={3}>
            <Grid
              item
              // component={Card}
              xs={12}
              md={2}
              className="confirmed"
              width="20px"
            >
              <Scrollbars style={{ width: "auto", height: 300 }}>
                <ListSubheader
                  style={{ background: "#ff0266" }}
                  inset="true"
                  disableGutters="true"
                >
                  <Typography variant="h5">
                    <b>Confirmed</b>
                  </Typography>
                </ListSubheader>
                <MuiThemeProvider theme={theme1}>
                  {Confirmed.map((val) => (
                    <ol>
                      <Typography variant="h6">{val}</Typography>
                    </ol>
                  ))}
                </MuiThemeProvider>
                {/* <ListItem>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <MuiThemeProvider theme={theme1}>
                            {Confirmed.map((val) => (
                              <ol>
                                <Typography variant="h6">{val}</Typography>
                              </ol>
                            ))}
                          </MuiThemeProvider>
                        </React.Fragment>
                      }
                    />
                  </ListItem> */}
              </Scrollbars>
              {/* </List> */}
            </Grid>

            <Grid
              item
              // component={Card}
              xs={12}
              md={2}
              className="deaths"
            >
              {/* <List
                style={{
                  background: "#1E1E1E",
                  padding: "0px",
                  width: "300px",
                }}
              > */}
              <Scrollbars style={{ width: "auto", height: 300 }}>
                <ListSubheader
                  style={{ background: "#923ff7" }}
                  inset="true"
                  disableGutters="true"
                >
                  <Typography variant="h5">
                    <b>Death</b>
                  </Typography>
                </ListSubheader>

                <MuiThemeProvider theme={theme1}>
                  {Deaths.map((val) => (
                    <ol>
                      <Typography variant="h6">{val}</Typography>
                    </ol>
                  ))}
                </MuiThemeProvider>

                {/* <ListItem>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <MuiThemeProvider theme={theme1}>
                            {Deaths.map((val) => (
                              <ol>
                                <Typography variant="h6">{val}</Typography>
                              </ol>
                            ))}
                          </MuiThemeProvider>
                        </React.Fragment>
                      }
                    />
                  </ListItem> */}
              </Scrollbars>
              {/* </List> */}
            </Grid>

            <Grid
              item
              // component={Card}
              xs={12}
              md={2}
              className="recovered"
            >
              {/* <List
                style={{
                  background: "#1E1E1E",
                  padding: "0px",
                  width: "300px",
                }}
              > */}
              <Scrollbars style={{ width: "auto", height: 300 }}>
                <ListSubheader
                  style={{ background: "#03dac5" }}
                  inset="true"
                  disableGutters="true"
                >
                  <Typography variant="h5">
                    <b>Recovered</b>
                  </Typography>
                </ListSubheader>
                <MuiThemeProvider theme={theme1}>
                  {Recovered.map((val) => (
                    <ol>
                      <Typography variant="h6">{val}</Typography>
                    </ol>
                  ))}
                </MuiThemeProvider>

                {/* <ListItem>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <MuiThemeProvider theme={theme1}>
                            {Recovered.map((val) => (
                              <ol>
                                <Typography variant="h6">{val}</Typography>
                              </ol>
                            ))}
                          </MuiThemeProvider>
                        </React.Fragment>
                      }
                    />
                  </ListItem> */}
              </Scrollbars>
              {/* </List> */}
            </Grid>

            <Grid
              item
              // component={Card}
              xs={12}
              md={2}
            >
              <TrendChart />
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default AllCards;
