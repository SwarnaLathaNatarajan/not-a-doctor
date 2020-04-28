import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Trendchart from "./Trendchart";
import Map from "./Map";
import Cards from "./Cards";
import AllCards from "./AllCards";
import CountryPicker from "./CountryPicker/CountryPicker";
import { Grid } from "@material-ui/core";
// import { Column, Row } from "simple-flexbox";
import styles from "./module1.css";
import Simplecard1 from "./simplecards";
import Simplecard2 from "./simplecards2";
class Module1 extends Component {
  render() {
    const styles = {
      grid: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      row: {
        marginLeft: 0,
        marginRight: 0,
      },
      col: {
        paddingLeft: 0,
        paddingRight: 0,
      },
      firstrow: {
        margin: "0 20%",
        paddingTop: "2.5%",
      },
    };
    return (
      <Grid className="justify-content-md-center">
        <Row style={styles.firstrow}>
          <Simplecard1 />
        </Row>
        <Row className="justify-content-md-center">
          <Map />
        </Row>
        <Row
          className="justify-content-md-center"
          style={{ paddingBottom: "2.5%" }}
        >
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Simplecard2 />
            <Trendchart />
          </Grid>
        </Row>
      </Grid>
      // <Container>
      //   <Row xs={1} md={1}>
      //     <Simplecard1 />
      //   </Row>
      //   <Row xs={1} md={1}>
      //     <Map />
      //   </Row>
      //   <Row>
      //     <Simplecard2 />
      //   </Row>
      //   {/* <Trendchart /> */}
      // </Container>
    );
  }
}
export default Module1;
