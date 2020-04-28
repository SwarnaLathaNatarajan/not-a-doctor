import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CountUp from "react-countup";
import CardGroup from "react-bootstrap/CardGroup";
import { Container, Row, Col } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Typography } from "@material-ui/core";
import TrendChart from "./Trendchart";
class Simplecard2 extends Component {
  state = { data: [], trend: [] };
  componentDidMount = () => {
    fetch("/covid-map-data/last-updated-aggregates")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };
  render() {
    return (
      <CardGroup>
        <Card
          text={"white"}
          style={{
            backgroundColor: "#FFFFFF10",
            width: "18rem",
            height: "25rem",
            borderRadius: "30px",
          }}
        >
          <Scrollbars
            style={{ backgroundColor: "#FFFFFF10", width: "auto", height: 400 }}
          >
            <ListSubheader
              style={{
                fontSize: 20,
                background: "#ff0266",
                color: "white",
              }}
              inset="true"
              disableGutters="true"
              className="justify-content-md-center"
            >
              <b>Confirmed</b>
            </ListSubheader>
            <Card.Body style={{ height: 400 }}>
              <Container style={{ height: 400 }}>
                {this.state.data.map((t) => (
                  <Row style={{ fontSize: 15, alignContent: "justify" }}>
                    <Col>{t.Country_Region}</Col>
                    <Col>{t.Confirmed}</Col>
                  </Row>
                ))}
              </Container>
            </Card.Body>
          </Scrollbars>
        </Card>
        <Card
          text={"white"}
          style={{
            backgroundColor: "#FFFFFF10",
            width: "18rem",
            height: "25rem",
            borderRadius: "30px",
          }}
        >
          <Scrollbars
            style={{ backgroundColor: "#FFFFFF10", width: "auto", height: 400 }}
          >
            <ListSubheader
              style={{
                fontSize: 20,
                background: "#923ff7",
                color: "white",
              }}
              inset="true"
              disableGutters="true"
              className="justify-content-md-center"
            >
              <b>Deaths</b>
            </ListSubheader>
            <Container style={{ height: 400 }}>
              {this.state.data.map((t) => (
                <Row style={{ fontSize: 15, alignContent: "justify" }}>
                  <Col>{t.Country_Region}</Col>
                  <Col>{t.Deaths}</Col>
                </Row>
              ))}
            </Container>
          </Scrollbars>
        </Card>
        <Card
          text={"white"}
          style={{
            backgroundColor: "#FFFFFF10",
            width: "18rem",
            height: "25rem",
            borderRadius: "30px",
          }}
        >
          <Scrollbars
            style={{ backgroundColor: "#FFFFFF10", width: "auto", height: 400 }}
          >
            <ListSubheader
              style={{
                fontSize: 20,
                background: "#03dac5",
                color: "white",
              }}
              inset="true"
              disableGutters="true"
              className="justify-content-md-center"
            >
              <b align="center">Recovered</b>
            </ListSubheader>
            <Container style={{ height: 400 }}>
              {this.state.data.map((t) => (
                <Row style={{ fontSize: 15 }}>
                  <Col>{t.Country_Region}</Col>
                  <Col>{t.Recovered}</Col>
                </Row>
              ))}
            </Container>
          </Scrollbars>
        </Card>
      </CardGroup>
    );
  }
}
export default Simplecard2;
