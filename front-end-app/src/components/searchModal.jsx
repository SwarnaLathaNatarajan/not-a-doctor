import React, { Component, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import * as storeinfo from './store-data.json';

class MydModalWithGrid extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
  };
  componentDidMount = () => {
    fetch("/news-data/get-news?topic=US")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };
  render() {
    const { props } = this;
    var titles = this.state.data.map((val, i) => {
      return val.title;
    });
    var imageurl = this.state.data.map((val, i) => {
      return val.urlToImage;
    });
    var pageurl = this.state.data.map((val, i) => {
      return val.url;
    });
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Body className="modalbody">
          <Container>
            {this.state.data.map((t) => (
              <Row>
                <Col xs={3} md={3}>
                  <Image
                    src={
                      t.urlToImage === "RAND"
                        ? "https://www.who.int/images/default-source/health-topics/coronavirus/corona-virus-getty.tmb-1200v.jpg?Culture=en&sfvrsn=217a6a68_24"
                        : t.urlToImage
                    }
                    fluid
                    rounded
                  />
                </Col>
                <Col align-self-center>
                  <a href={t.url} style={{ fontSize: "23px" }}>
                    {t.title}
                  </a>
                </Col>
              </Row>
            ))}
          </Container>
        </Modal.Body>
      </Modal>
    );
  }
}

function Modal1() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Display Articles
      </Button>

      <MydModalWithGrid
        className="modalbg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        centered="true"
        size="xl"
        scrollable="true"
      />
    </>
  );
}

function NewsOverlay() {
  return <Modal1 />;
}
export default NewsOverlay;
