import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Trendchart from "./Trendchart";
import Map from "./Map";
import Cards from "./Cards/Cards";
import AllCards from "./AllCards";
import CountryPicker from "./CountryPicker/CountryPicker";
import { Grid } from "@material-ui/core";
// import { Column, Row } from "simple-flexbox";
import styles from "./module1.css";

class Module1 extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Cards />
        </Row>

        <Row>
          <Map />
        </Row>

        <Row>
          <AllCards />
        </Row>
        {/* <Trendchart /> */}
      </Container>
    );
  }
}
export default Module1;
