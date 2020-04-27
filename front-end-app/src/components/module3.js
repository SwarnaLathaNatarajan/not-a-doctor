import React, { Component } from "react";
import TopicModelTreemap from "./TopicModelTreemap";
import NewsOverlay from "./newsTopicOverlay";
import NewsCard from "./newsCard";
import { Container, Row, Col } from "reactstrap";

class Module3 extends Component {
  render() {
    return (
      <div class="d-flex flex-row">
        <div>
          <TopicModelTreemap />
        </div>
        <div>
          <NewsOverlay />
        </div>
      </div>
    );
  }
}

export default Module3;
