import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Module1 from "./module1";
import Module2 from "./module2";
import Module3 from "./module3";
import TopicModelTreemap from "./TopicModelTreemap";
import Trendchart from "./Trendchart";
import Module4 from "./module4";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/module1" component={Module1} />
    <Route path="/Trendchart" component={Trendchart} />
    <Route path="/module3" component={Module3} />
    <Route path="/module4" component={Module4} />
  </Switch>
);

export default Main;
