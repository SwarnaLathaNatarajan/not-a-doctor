import React, { Component } from "react";
import TopicModelTreemap from "./TopicModelTreemap";
import NewsOverlay from "./newsTopicOverlay";
import TopicCard from "./newsCard";
import { Container, Row, Col } from "reactstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Grid } from "@material-ui/core";
class Module3 extends Component {
  render() {
    return (
      <Grid className="justify-content-md-center">
        <Row>
          <Grid container direction="row" justify="center" alignItems="center">
            <TopicModelTreemap />
            <TopicCard />
          </Grid>
        </Row>
        <Row style={{ marginRight: "5%" }}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-end"
          >
            <NewsOverlay />
          </Grid>
        </Row>
      </Grid>
    );
  }
}

export default Module3;
