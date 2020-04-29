import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import { NavLink, Link } from "react-router-dom";
import Main from "./components/main";
function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          className="header-color"
          title={
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              not-a-doctor
            </Link>
          }
          scroll
        >
          <Navigation>
            <NavLink activeStyle={{ fontWeight: "bold" }} to="/module1">
              Dashboard
            </NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to="/module2">
              SocialMediaTrends
            </NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to="/module3">
              NewsTopics
            </NavLink>
            <NavLink activeStyle={{ fontWeight: "bold" }} to="/module4">
              ResourceTracker
            </NavLink>
          </Navigation>
        </Header>

        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
