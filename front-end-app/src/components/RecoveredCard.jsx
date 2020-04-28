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
import styles from "./cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Scrollbars } from "react-custom-scrollbars";
import { Container, Row, Col } from "reactstrap";
import ListSubheader from "@material-ui/core/ListSubheader";

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

class RecoveredCard extends React.Component {
  state = { data: [], trend: [] };
  componentDidMount = () => {
    fetch("/covid-map-data/last-updated-aggregates")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  render() {
    {
      var combined = this.state.data.map((val, i) => {
        return val.Recovered + "   |  " + val.Country_Region;
      });

      // var combined = combined.sort();

      // var combined_final = combined_sort.reverse();

      return (
        <div className="container">
          <Grid container>
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
                      <b>Recovered By Region</b>
                    </Typography>
                  </ListSubheader>

                  <ListItem>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <MuiThemeProvider theme={theme1}>
                            {combined.map((val) => (
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
          </Grid>
        </div>
      );
    }
  }
}

export default RecoveredCard;
