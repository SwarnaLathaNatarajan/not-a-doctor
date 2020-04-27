import React, { Component } from "react";

class Mediatrendchart extends Component {
  state = { data: this.props.data };

  render() {
    return (
      <div style={{ color: "white" }}>{JSON.stringify(this.props.data)}</div>
    );
  }
}

export default Mediatrendchart;
