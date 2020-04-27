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
import TrendChart from "./components/Trendchart";

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
          <Grid container spacing={3} justify="center">
            <Grid
              item
              // component={Card}
              xs={12}
              md={3}
              className="confirmed"
            >
              <Scrollbars style={{ width: "auto", height: 300 }}>
                <List style={{ background: "#1E1E1E", padding: "0px" }}>
                  <ListSubheader
                    style={{ background: "#1E1E1E" }}
                    inset="true"
                    disableGutters="true"
                  >
                    <Typography variant="h5">
                      <b>Confirmed Cases By Region</b>
                    </Typography>
                  </ListSubheader>

                  <ListItem>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <MuiThemeProvider theme={theme1}>
                            {Confirmed.map((val) => (
                              <ol>
                                <Typography variant="h5">{val}</Typography>
                              </ol>
                            ))}
                          </MuiThemeProvider>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </Scrollbars>
            </Grid>

            <Grid
              item
              // component={Card}
              xs={12}
              md={3}
              className="deaths"
            >
              <Scrollbars style={{ width: "auto", height: 300 }}>
                <List style={{ background: "#1E1E1E", padding: "0px" }}>
                  <ListSubheader
                    style={{ background: "#1E1E1E" }}
                    inset="true"
                    disableGutters="true"
                  >
                    <Typography variant="h5">
                      <b>Death Cases By Region</b>
                    </Typography>
                  </ListSubheader>

                  <ListItem>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <MuiThemeProvider theme={theme1}>
                            {Deaths.map((val) => (
                              <ol>
                                <Typography variant="h5">{val}</Typography>
                              </ol>
                            ))}
                          </MuiThemeProvider>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </Scrollbars>
            </Grid>

            <Grid
              item
              // component={Card}
              xs={12}
              md={3}
              className="recovered"
            >
              <Scrollbars style={{ width: "auto", height: 300 }}>
                <List style={{ background: "#1E1E1E", padding: "0px" }}>
                  <ListSubheader
                    style={{ background: "#1E1E1E" }}
                    inset="true"
                    disableGutters="true"
                  >
                    <Typography variant="h5">
                      <b>Recovered Cases By Region</b>
                    </Typography>
                  </ListSubheader>

                  <ListItem>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <MuiThemeProvider theme={theme1}>
                            {Recovered.map((val) => (
                              <ol>
                                <Typography variant="h5">{val}</Typography>
                              </ol>
                            ))}
                          </MuiThemeProvider>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </List>
              </Scrollbars>
            </Grid>

            <Grid
              item
              // component={Card}
              xs={12}
              md={3}
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
