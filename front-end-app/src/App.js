import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <Link to="/module1">Module1</Link>
                <Link to="/module2">Module2</Link>
                <Link to="/module3">Module3</Link>
                <Link to="/module4">Module4</Link>
            </Navigation>
        </Header>
        {/* <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer> */}
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

  );
}

export default App;
