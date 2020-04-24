import React, { Component } from "react";
import Searchbox from "./Searchbox";

class Module4 extends Component {
  render() {
    return (
      <div>
        <div className="desc">
          <h1>Resource Tracker</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Scelerisque viverra mauris in aliquam sem fringilla ut. Quisque
            sagittis purus sit amet volutpat consequat mauris nunc.
          </p>
        </div>
        <center>
          <Searchbox />
        </center>
      </div>
    );
  }
}
export default Module4;
