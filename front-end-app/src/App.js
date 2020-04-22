import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import { Link } from "react-router-dom";
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
            <Link to="/module1">Module1</Link>
            <Link to="/Trendchart">Trendchart</Link>
            <Link to="/TopicModelTreemap">News Topics</Link>
            <Link to="/module4">Module4</Link>
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
