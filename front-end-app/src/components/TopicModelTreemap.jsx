import React, { Component } from "react";
import Plot from "react-plotly.js";

class TopicModelTreemap extends Component {
  state = {};

  render() {
    var topiclist = [
      " ",
      "updates",
      "johnson",
      "health",
      "workers-home",
      "death",
      "lockdown, hospital",
      "warns-hit",
      "dies",
      "business, insider",
      "business, insider",
      "trump, checks",
      "outbreak",
      "protests-china",
      "world",
      "crisis",
      "pandemic",
      "trump, americans",
      "testing",
      "amid",
      "insider-people",
      "thehill",
      "cnn",
      "calls",
      "week-fears",
      "lockdown, people",
    ];
    var probs = [
      0,
      0.04436,
      0.03912,
      0.04116,
      0.0377,
      0.04656,
      0.04027,
      0.03699,
      0.03704,
      0.03426,
      0.04178,
      0.04353,
      0.04318,
      0.04114,
      0.04149,
      0.03875,
      0.04198,
      0.03339,
      0.04228,
      0.03896,
      0.03968,
      0.0428,
      0.0384,
      0.03788,
      0.03931,
      0.03798,
    ];
    return (
      <div style={{ backgroundColor: "#121212" }}>
        <Plot
          data={[
            {
              type: "treemap",
              labels: topiclist,
              parents: [
                "",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
                " ",
              ],
              values: probs,
              textposition: "middle center",
              textfont: { family: "Roboto", size: 25 },
            },
          ]}
          layout={{
            width: 1200,
            height: 800,
            title: {
              text: "Top News Topics",
              font: { color: "#C0C0C0", size: 35 },
=======
            width: 1400,
            height: 900,
            title: {
              text: "Top News-Topics",
              font: { color: "#C0C0C0", size: 33 },
>>>>>>> Stashed changes
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
    );
  }
}

export default TopicModelTreemap;
