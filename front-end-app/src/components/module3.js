import React, { Component } from "react";
import TopicModelTreemap from "./TopicModelTreemap";
import NewsOverlay from "./newsTopicOverlay";

class Module3 extends Component {
  render() {
    return (
      <div class="d-flex flex-row" style={{ backgroundColor: "#121212" }}>
        <div class="p-2">
          <TopicModelTreemap />
        </div>
        <div class="p-2">
          <NewsOverlay />
        </div>
      </div>
    );
  }
}
export default Module3;
