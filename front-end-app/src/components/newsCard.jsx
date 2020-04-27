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
import styles from "./Cards/cards.module.css";
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
var theme1 = createMuiTheme({
  typography: {
    h6: {
      color: "#FF0266",
      //   secondary: "#03DAC5",
    },
  },
});
class NewsCard extends Component {
  state = {
    data: [],
  };
  componentDidMount = () => {
    fetch("/news-data/get-news?topic=lockdown")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };
  render() {
    var titles = this.state.data.map((val, i) => {
      return val.title;
    });
    return (
      <div className={styles.container}>
        <Grid container spacing={1} justify="center">
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.confirmed)}
          >
            <Scrollbars style={{ width: 500, height: 300 }}>
              <CardContent style={{ maxHeight: 600 }}>
                <Typography variant="h5" color="textPrimary" gutterBottom>
                  Confirmed Cases By Region
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={
                        <React.Fragment>
                          <MuiThemeProvider theme={theme1}>
                            <Typography
                              component="span"
                              variant="h1"
                              color="textPrimary"
                            >
                              {/* {confirmed.map((confirm) => (
                              <ol>{confirm} </ol>
                            ))} */}
                              {titles.map((reg) => (
                                <ol>
                                  <Typography
                                    component="span"
                                    variant="h6"
                                    color="primary"
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
export default NewsCard;
