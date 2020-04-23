import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Module1 from "./module1";
import Module2 from "./module2";
import TopicModelTreemap from "./TopicModelTreemap";
import Module4 from "./module4";
import Trendchart from "./Trendchart";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/module1" component={Module1} />
    <Route path="/Trendchart" component={Trendchart} />
    <Route path="/TopicModelTreeMap" component={TopicModelTreemap} />
    <Route path="/module4" component={Module4} />
  </Switch>
);

export default Main;
