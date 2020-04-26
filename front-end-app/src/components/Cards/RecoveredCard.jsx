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

var theme2 = createMuiTheme({
  typography: {
    h6: {
      color: "#03DAC5",
    },
  },
});
class Cards extends React.Component {
  state = { data: [], trend: [] };
  componentDidMount = () => {
    fetch("/covid-map-data/last-updated")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  render() {
    {
      var recovered = this.state.data.map((val, i) => {
        return val.Recovered;
      });

      var country_names = this.state.data.map((val, i) => {
        return val.Country_Region;
      });

      var distinct_countrynames = Array.from(new Set(country_names));

      const recovered_data = parseInt(recovered[recovered.length - 1]);

      return (
        <div className={styles.container}>
          <Grid container spacing={1} justify="center">
            <Grid
              item
              component={Card}
              xs={12}
              md={3}
              className={cx(styles.card, styles.recovered)}
            >
              <Scrollbars style={{ width: 500, height: 300 }}>
                <CardContent style={{ maxHeight: 600, overflow: "auto" }}>
                  <Typography variant="h5" color="textPrimary" gutterBottom>
                    Recovered Cases By Region
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <MuiThemeProvider theme={theme2}>
                              <Typography
                                component="span"
                                variant="h1"
                                color="textPrimary"
                              >
                                {/* {confirmed.map((confirm) => (
                              <ol>{confirm} </ol>
                            ))} */}
                                {distinct_countrynames.map((reg) => (
                                  <ol>
                                    <Typography component="span" variant="h6">
                                      1000 {"         "}
                                    </Typography>
                                    <Typography
                                      variant="h7"
                                      color="textSecondary"
                                    >
                                      {reg}
                                    </Typography>
                                  </ol>
                                ))}
                              </Typography>
                            </MuiThemeProvider>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Scrollbars>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default Cards;
