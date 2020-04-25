import React, { Component } from "react";
import TopicModelTreemap from "./TopicModelTreemap";
import NewsOverlay from "./newsTopicOverlay";

class Module3 extends Component {
  render() {
    return (
      <div>
        <TopicModelTreemap />
        <NewsOverlay />
      </div>
    );
  }
}
export default Module3;
