import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CountUp from "react-countup";
import CardGroup from "react-bootstrap/CardGroup";
class Simplecard1 extends Component {
  state = { data: [] };
  componentDidMount = () => {
    fetch("/covid-map-data/aggregates")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };
  render() {
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
      <CardGroup style={{ align: "justify" }}>
        <Card
          text={"white"}
          style={{
            backgroundColor: "#FFFFFF10",
            width: "25rem",
            borderRadius: "30px",
          }}
        >
          <Card.Header style={{ backgroundColor: "#ff0266" }}>
            <b>CONFIRMED</b>
          </Card.Header>
          <Card.Body>
            <Card.Title style={{ color: "#ff0266" }}>
              <h2>
                <CountUp start={0} end={2700085} duration={2.5} separator="," />
              </h2>
            </Card.Title>
            <Card.Text>{date_string}</Card.Text>
          </Card.Body>
        </Card>
        <Card
          text={"white"}
          style={{
            backgroundColor: "#FFFFFF10",
            width: "25rem",
            borderRadius: "30px",
          }}
        >
          <Card.Header style={{ backgroundColor: "#923ff7" }}>
            <b>DEATHS</b>
          </Card.Header>
          <Card.Body>
            <Card.Title style={{ color: "#923ff7" }}>
              <h2>
                <CountUp start={0} end={90000} duration={2.5} separator="," />
              </h2>
            </Card.Title>
            <Card.Text>{date_string}</Card.Text>
          </Card.Body>
        </Card>
        <Card
          text={"white"}
          style={{
            backgroundColor: "#FFFFFF10",
            width: "25rem",
            borderRadius: "30px",
          }}
        >
          <Card.Header style={{ backgroundColor: "#03dac5" }}>
            <b>RECOVERED</b>
          </Card.Header>
          <Card.Body>
            <Card.Title style={{ color: "#03dac5" }}>
              <h2>
                <CountUp start={0} end={8500} duration={2.5} separator="," />
              </h2>
            </Card.Title>
            <Card.Text>{date_string}</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    );
  }
}
export default Simplecard1;
