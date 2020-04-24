import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Not-a-doctor</h1>
              <hr />
              <p>Yet another COVID dashboard by Engineers. </p>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;
