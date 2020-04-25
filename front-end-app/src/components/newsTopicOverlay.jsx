import React, { Component, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";
import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
function MydModalWithGrid(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Body className="modalbody">
        <Container>
          <Row className="show-grid">
            <Col xs={2} md={2}>
              <div>
                <Image
                  src="https://www.usnews.com/dims4/USNEWS/0dea99e/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F34%2F9194c35cf623c91f0f1f8380ef8816%2Ftag%3Areuters.com%2C2020%3Anewsml_LYNXNPEG3N0HT%3A12020-04-24T080727Z_1_LYNXNPEG3N0HT_RTROPTP_3_HEALTH-CORONAVIRUS-PORTUGAL-BRAZIL.JPG"
                  fluid
                />
              </div>
            </Col>
            <Col>
              <a href="https://www.usnews.com/news/world/articles/2020-04-24/coronavirus-crisis-heaps-hardship-on-brazilian-migrants-in-portugal">
                Coronavirus Crisis Heaps Hardship on Brazilian Migrants in
                Portugal
              </a>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={2} md={2}>
              <Image
                src="https://pmcdeadline2.files.wordpress.com/2020/04/shutterstock_editorial_10622362a.jpg?w=681&h=383&crop=1"
                fluid
              />
            </Col>
            <Col>
              <a href="https://deadline.com/2020/04/coronavirus-house-nancy-pelosi-kevin-mccarthy-1202916132/">
                House Passes $484 Billion In Coronavirus Relief, Including
                Replenishment Of Small Business Loan Program
              </a>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={2} md={2}>
              <div>
                <Image
                  src="https://www.usnews.com/dims4/USNEWS/0dea99e/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F34%2F9194c35cf623c91f0f1f8380ef8816%2Ftag%3Areuters.com%2C2020%3Anewsml_LYNXNPEG3N0HT%3A12020-04-24T080727Z_1_LYNXNPEG3N0HT_RTROPTP_3_HEALTH-CORONAVIRUS-PORTUGAL-BRAZIL.JPG"
                  fluid
                />
              </div>
            </Col>
            <Col>
              <a href="https://www.usnews.com/news/world/articles/2020-04-24/coronavirus-crisis-heaps-hardship-on-brazilian-migrants-in-portugal">
                Coronavirus Crisis Heaps Hardship on Brazilian Migrants in
                Portugal
              </a>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={2} md={2}>
              <Image
                src="https://pmcdeadline2.files.wordpress.com/2020/04/shutterstock_editorial_10622362a.jpg?w=681&h=383&crop=1"
                fluid
              />
            </Col>
            <Col>
              <a href="https://deadline.com/2020/04/coronavirus-house-nancy-pelosi-kevin-mccarthy-1202916132/">
                House Passes $484 Billion In Coronavirus Relief, Including
                Replenishment Of Small Business Loan Program
              </a>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={2} md={2}>
              <div>
                <Image
                  src="https://www.usnews.com/dims4/USNEWS/0dea99e/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F34%2F9194c35cf623c91f0f1f8380ef8816%2Ftag%3Areuters.com%2C2020%3Anewsml_LYNXNPEG3N0HT%3A12020-04-24T080727Z_1_LYNXNPEG3N0HT_RTROPTP_3_HEALTH-CORONAVIRUS-PORTUGAL-BRAZIL.JPG"
                  fluid
                />
              </div>
            </Col>
            <Col>
              <a href="https://www.usnews.com/news/world/articles/2020-04-24/coronavirus-crisis-heaps-hardship-on-brazilian-migrants-in-portugal">
                Coronavirus Crisis Heaps Hardship on Brazilian Migrants in
                Portugal
              </a>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={2} md={2}>
              <Image
                src="https://pmcdeadline2.files.wordpress.com/2020/04/shutterstock_editorial_10622362a.jpg?w=681&h=383&crop=1"
                fluid
              />
            </Col>
            <Col>
              <a href="https://deadline.com/2020/04/coronavirus-house-nancy-pelosi-kevin-mccarthy-1202916132/">
                House Passes $484 Billion In Coronavirus Relief, Including
                Replenishment Of Small Business Loan Program
              </a>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={2} md={2}>
              <div>
                <Image
                  src="https://www.usnews.com/dims4/USNEWS/0dea99e/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F34%2F9194c35cf623c91f0f1f8380ef8816%2Ftag%3Areuters.com%2C2020%3Anewsml_LYNXNPEG3N0HT%3A12020-04-24T080727Z_1_LYNXNPEG3N0HT_RTROPTP_3_HEALTH-CORONAVIRUS-PORTUGAL-BRAZIL.JPG"
                  fluid
                />
              </div>
            </Col>
            <Col>
              <a href="https://www.usnews.com/news/world/articles/2020-04-24/coronavirus-crisis-heaps-hardship-on-brazilian-migrants-in-portugal">
                Coronavirus Crisis Heaps Hardship on Brazilian Migrants in
                Portugal
              </a>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={2} md={2}>
              <Image
                src="https://pmcdeadline2.files.wordpress.com/2020/04/shutterstock_editorial_10622362a.jpg?w=681&h=383&crop=1"
                fluid
              />
            </Col>
            <Col>
              <a href="https://deadline.com/2020/04/coronavirus-house-nancy-pelosi-kevin-mccarthy-1202916132/">
                House Passes $484 Billion In Coronavirus Relief, Including
                Replenishment Of Small Business Loan Program
              </a>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={2} md={2}>
              <div>
                <Image
                  src="https://www.usnews.com/dims4/USNEWS/0dea99e/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F34%2F9194c35cf623c91f0f1f8380ef8816%2Ftag%3Areuters.com%2C2020%3Anewsml_LYNXNPEG3N0HT%3A12020-04-24T080727Z_1_LYNXNPEG3N0HT_RTROPTP_3_HEALTH-CORONAVIRUS-PORTUGAL-BRAZIL.JPG"
                  fluid
                />
              </div>
            </Col>
            <Col>
              <a href="https://www.usnews.com/news/world/articles/2020-04-24/coronavirus-crisis-heaps-hardship-on-brazilian-migrants-in-portugal">
                Coronavirus Crisis Heaps Hardship on Brazilian Migrants in
                Portugal
              </a>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={2} md={2}>
              <Image
                src="https://pmcdeadline2.files.wordpress.com/2020/04/shutterstock_editorial_10622362a.jpg?w=681&h=383&crop=1"
                fluid
              />
            </Col>
            <Col>
              <a href="https://deadline.com/2020/04/coronavirus-house-nancy-pelosi-kevin-mccarthy-1202916132/">
                House Passes $484 Billion In Coronavirus Relief, Including
                Replenishment Of Small Business Loan Program
              </a>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={2} md={2}>
              <div>
                <Image
                  src="https://www.usnews.com/dims4/USNEWS/0dea99e/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F34%2F9194c35cf623c91f0f1f8380ef8816%2Ftag%3Areuters.com%2C2020%3Anewsml_LYNXNPEG3N0HT%3A12020-04-24T080727Z_1_LYNXNPEG3N0HT_RTROPTP_3_HEALTH-CORONAVIRUS-PORTUGAL-BRAZIL.JPG"
                  fluid
                />
              </div>
            </Col>
            <Col>
              <a href="https://www.usnews.com/news/world/articles/2020-04-24/coronavirus-crisis-heaps-hardship-on-brazilian-migrants-in-portugal">
                Coronavirus Crisis Heaps Hardship on Brazilian Migrants in
                Portugal
              </a>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={2} md={2}>
              <Image
                src="https://pmcdeadline2.files.wordpress.com/2020/04/shutterstock_editorial_10622362a.jpg?w=681&h=383&crop=1"
                fluid
              />
            </Col>
            <Col>
              <a href="https://deadline.com/2020/04/coronavirus-house-nancy-pelosi-kevin-mccarthy-1202916132/">
                House Passes $484 Billion In Coronavirus Relief, Including
                Replenishment Of Small Business Loan Program
              </a>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
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
