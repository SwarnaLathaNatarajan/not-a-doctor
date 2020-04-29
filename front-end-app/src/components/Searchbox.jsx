import React, { Component, Text } from "react";
import "./search-style.css";
import { Container, Row, Col } from "reactstrap";
import { render } from "react-dom";
import { TransitionMotion, spring } from "react-motion";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Searchbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "Search Product",
      item: null,
      data: [],
      showModal: false,
    };
  }
  changeValue(event) {
    const value = event.target.value;
    this.setState({ value, error: "" });
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      console.log("value", event.target.value);
      this.setState({ item: event.target.value });
      this.setState({ data: [] });
      fetch("/resource-tracker/?item=" + event.target.value)
        .then((res) => res.json())
        .then((data) => this.setState({ data }));
      this.setState({ showModal: true });
    }
  }

  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  render() {
    const { active, value, error, label } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${
      (locked ? active : active || value) && "active"
    } ${locked && !active && "locked"}`;

    return (
      <div>
        <div className={fieldClassName}>
          {active && value && predicted && predicted.includes(value) && (
            <p className="predicted">{predicted}</p>
          )}
          <input
            id={1}
            type="text"
            value={value}
            placeholder={label}
            onChange={this.changeValue.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
            onFocus={() => !locked && this.setState({ active: true })}
            onBlur={() => !locked && this.setState({ active: false })}
          />
          <label htmlFor={1} className={error && "error"}>
            {error || label}
          </label>
        </div>
        <Modal
          show={this.state.showModal}
          onHide={() => this.handleToggleModal()}
          className="r-modalbg"
          size="xl"
        >
          <Modal.Body className="r-modalbody">
            <Container>
              {this.state.data.length == 0 && (
                <center>
                  <Loader
                    type="Circles"
                    text-align="center"
                    color="#03dac5"
                    height={100}
                    width={100}
                    timeout={10000} //3 secs
                  />
                </center>
              )}
              {this.state.data.length > 0 &&
                this.state.data.map((t) => (
                  <Row>
                    <Col xs={3} md={3}>
                      <Image
                        src={t.image_url}
                        height="90"
                        width="90"
                        fluid
                        rounded
                      />
                    </Col>
                    <Col align-self-center>
                      <a href={t.product_url} style={{ fontSize: "23px" }}>
                        {t.title}
                      </a>
                    </Col>
                  </Row>
                ))}
            </Container>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Searchbox;
