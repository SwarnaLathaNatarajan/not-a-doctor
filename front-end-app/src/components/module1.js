import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Trendchart from "./Trendchart";
import Map from "./Map";
import Cards from "./Cards/Cards";
import ConfirmedCard from "./Cards/ConfirmedCard";
import RecoveredCard from "./Cards/RecoveredCard";
import DeathsCard from "./Cards/DeathsCard";
import CountryPicker from "./CountryPicker/CountryPicker";
import { Grid } from "@material-ui/core";
// import { Column, Row } from "simple-flexbox";
import styles from "./module1.css";

class Module1 extends Component {
  render() {
    return (
      // <div className={styles.container}>
      //   <Grid container spacing={3}>
      //     <Grid item>
      //       <ConfirmedCard />
      //     </Grid>
      //     <Grid item>
      //       <RecoveredCard />
      //     </Grid>
      //     <Grid item>
      //       <DeathsCard />
      //     </Grid>
      //   </Grid>
      // </div>
      <Container>
        <Row>
          <Cards />
        </Row>
        <Row>
          <CountryPicker />
        </Row>
        <Row>
          <Col>
            <ConfirmedCard />
          </Col>
          <Col>
            <Map />
          </Col>
          <Col>
            <RecoveredCard />
            <DeathsCard />
          </Col>
          <Col>
            <Trendchart />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Module1;
