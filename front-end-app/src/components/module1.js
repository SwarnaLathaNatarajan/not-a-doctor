import React, { Component } from "react";
import Trendchart from "./Trendchart";
import Map from "./Map";

class Module1 extends Component {
  render() {
    return (
      <div>
        <Map />
        <Trendchart />
      </div>
    );
  }
}
export default Module1;
