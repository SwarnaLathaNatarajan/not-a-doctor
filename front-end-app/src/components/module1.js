import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Trendchart from "./Trendchart";
import Map from "./Map";

class Module1 extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Map />
          <Trendchart />
        </Row>
      </Container>
    );
  }
}
export default Module1;
