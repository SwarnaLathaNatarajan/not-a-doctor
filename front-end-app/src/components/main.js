import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Module1 from "./module1";
import Module2 from "./module2";
import TopicModelTreemap from "./TopicModelTreemap";
import Module4 from "./module4";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/Module1" component={Module1} />
    <Route path="/module2" component={Module2} />
    <Route path="/TopicModelTreeMap" component={TopicModelTreemap} />
    <Route path="/module4" component={Module4} />
  </Switch>
);

export default Main;
