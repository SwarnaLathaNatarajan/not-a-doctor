import React, { Component, useState } from "react";
import Plot from "react-plotly.js";
import MyModalWithGrid from "./MyModalWithGrid";

class TopicModelTreemap extends Component {
  state = { data: [] };
  componentDidMount = () => {
    fetch("/news-data/get-topics")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };
  render() {
    var topiclist = this.state.data.map((val, i) => {
      return val.Topics;
    });
    topiclist.unshift(" ");
    var probs = this.state.data.map((val, i) => {
      return val.Probability;
    });
    probs.unshift(0);
    let par = new Array(20).fill(" ");
    par.unshift("");
    return (
      <div>
        <div style={{ backgroundColor: "#121212" }}>
          <Plot
            data={[
              {
                type: "treemap",
                labels: topiclist,
                parents: par,
                values: probs,
                textposition: "middle center",
                textfont: { family: "Roboto", size: 25 },
              },
            ]}
            onClick={(event) => {
              if (event && event.points) {
                console.log(event.points[0].label);
                window.topicClicked = event.points[0].label;
                this.setState({
                  modalShow: true,
                });
              }
            }}
            layout={{
              width: 1200,
              height: 800,
              title: {
                text: "Top News Topics",
                font: { color: "#C0C0C0", size: 35 },
              },
              plot_bgcolor: "black",
              paper_bgcolor: "#121212",
              treemapcolorway: [
                "#EF0078",
                "#1EB980",
                "#1EA4B9",
                "#B15DFF",
                "#72DEFF",
              ],
            }}
          />
        </div>
        <MyModalWithGrid
          className="modalbg"
          show={this.state.modalShow}
          onHide={() => {
            this.setState({
              modalShow: false,
            });
          }}
          centered="true"
          size="xl"
          scrollable="true"
        />
      </div>
    );
  }
}

export default TopicModelTreemap;
