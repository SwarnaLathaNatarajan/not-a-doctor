import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Module1 from "./module1";
import Module2 from "./module2";
import Module3 from "./module3";
import TopicModelTreemap from "./TopicModelTreemap";
import Module4 from "./module4";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
<<<<<<< Updated upstream
    <Route path="/Module1" component={Module1} />
    <Route path="/module2" component={Module2} />
    <Route path="/TopicModelTreeMap" component={TopicModelTreemap} />
=======
    <Route path="/module1" component={Module1} />
    <Route path="/Trendchart" component={Trendchart} />
    <Route path="/module3" component={Module3} />
>>>>>>> Stashed changes
    <Route path="/module4" component={Module4} />
  </Switch>
);

export default Main;
