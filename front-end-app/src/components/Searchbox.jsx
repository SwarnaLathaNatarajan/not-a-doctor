import React, { Component } from "react";
import ReactSearchBox from "react-search-box";

class Searchbox extends Component {
  state = {};
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="searchbox" style={{ width: "50%" }}>
        <ReactSearchBox
          placeholder="Search an item"
          value=""
          inputBoxBorderColor="#03DAC5"
        />
      </div>
    );
  }
}

export default Searchbox;
