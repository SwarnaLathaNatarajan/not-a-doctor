import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import FlareSharpIcon from "@material-ui/icons/FlareSharp";

class TopicCard extends Component {
  state = {
    data: [],
  };
  componentDidMount = () => {
    fetch("/news-data/get-topics")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };
  render() {
    var topiclist = this.state.data.map((val, i) => {
      return val.Topics;
    });
    return (
      <Card
        text={"white"}
        bg="dark"
        style={{
          // backgroundColor: "#FFFFFF10",
          width: "28rem",
          height: "40rem",
          borderRadius: "30px",
        }}
      >
        <Card.Header
          className="justify-content-md-center"
          style={{ fontSize: 20 }}
          align="center"
        >
          TRENDING TOPICS
        </Card.Header>
        <Card.Body>
          <Container>
            {this.state.data.map((t, i) => (
              <Row style={{ fontSize: 20 }}>
                <Col className="justify-content-md-center" md={2}>
                  {i + 1}.
                </Col>
                <Col className="justify-content-md-center" md={35}>
                  {t.Topics}
                </Col>
                <Col md={3}>
                  {Math.random() >= 0.5 ? (
                    Math.random() >= 0.5 ? (
                      <ArrowDownwardIcon color="secondary" />
                    ) : (
                      <FlareSharpIcon style={{ color: "yellow" }} />
                    )
                  ) : (
                    <ArrowUpwardIcon style={{ color: "green" }} />
                  )}
                </Col>
              </Row>
            ))}
          </Container>
        </Card.Body>
      </Card>
    );
  }
}
export default TopicCard;
