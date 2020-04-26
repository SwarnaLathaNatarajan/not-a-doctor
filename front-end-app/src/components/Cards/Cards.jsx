import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  StylesProvider,
} from "@material-ui/core";
import styles from "./cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

class Cards extends React.Component {
  state = { data: [] };
  componentDidMount = () => {
    fetch("/covid-map-data/aggregates")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  render() {
    {
      var today = new Date();
      var dd = String(today.getDate() - 1).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();
      today = mm + "/" + dd + "/" + yyyy;
      var date_string = new Date(today).toDateString();

      var confirmed = this.state.data.map((val, i) => {
        return val.Confirmed;
      });

      const confirmed_data = parseInt(confirmed[confirmed.length - 1]);

      return (
        <div className={styles.container}>
          <Grid container spacing={3} justify="center">
            <Grid
              item
              component={Card}
              xs={12}
              md={3}
              className={cx(styles.card, styles.confirmed)}
            >
              <CardContent>
                <Typography variant="h5" color="textPrimary" gutterBottom>
                  Confirmed
                </Typography>
                <Typography variant="h4">
                  <CountUp
                    start={0}
                    end={2700085}
                    duration={2.5}
                    separator=","
                  />
                </Typography>
                <Typography color="textSecondary">{date_string} </Typography>
              </CardContent>
            </Grid>

            <Grid
              item
              component={Card}
              xs={12}
              md={3}
              className={cx(styles.card, styles.recovered)}
            >
              <CardContent>
                <Typography variant="h5" color="textPrimary" gutterBottom>
                  Recovered
                </Typography>
                <Typography variant="h4">
                  <CountUp start={0} end={80000} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">{date_string}</Typography>
              </CardContent>
            </Grid>

            <Grid
              item
              component={Card}
              xs={12}
              md={3}
              className={cx(styles.card, styles.deaths)}
            >
              <CardContent>
                <Typography variant="h5" color="textPrimary" gutterBottom>
                  Deaths
                </Typography>
                <Typography variant="h4">
                  <CountUp start={0} end={7000} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">{date_string}</Typography>
              </CardContent>
            </Grid>
          </Grid>
        </div>
      );
    }
  }
}

export default Cards;
