import React, { Component } from "react";
import Searchbox from "./Searchbox";

class Module4 extends Component {
  render() {
    return (
      <div>
        <div className="desc">
          <h1>Resource Tracker</h1>
          <p>
            The rise of the COVID-19 pandemic has resulted in people hoarding
            basic home supplies. This has created a great panic among people. In
            this module, the availability of products in stores like Walmart,
            Target and Costco can be tracked easily.
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
