import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import { Tabs } from 'antd';
const { TabPane } = Tabs;

class Home extends Component {

  buildLocation = (location, tabName) => {
    const { match: { path } } = this.props;

    return { ...location, pathname: `${path}/${tabName}` }
  };

  tabs = [
    {
      title: (
        <Link
          to={location => ({ ...location, pathname: "/home/first" })}
        >
          First
        </Link>
      ),
      key: 'first',
      body: <h1>Content of Tab Pane 1</h1>
    },
    {
      title: (
        <Link
          to={location => ({ ...location, pathname: "/home/second" })}
        >
          Second
        </Link>
      ),
      key: 'second',
      body: <h1>Content of Tab Pane 2</h1>
    },
    {
      title: (
        <Link
          to={location => ({ ...location, pathname: "/home/third" })}
        >
          Third
        </Link>
      ),
      key: 'third',
      body: <h1>Content of Tab Pane 3</h1>
    },
  ]

  renderTabPanes = () => {
    return this.tabs.map(tab => {
      return (
        <TabPane tab={tab.title} key={tab.key}>
          {tab.body}
        </TabPane>
      )
    })
  }

  getActiveKey = (location) => {
    return location.pathname.split('/')[2];
  }

  render() {

    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <Route path="/home/:path" render={({location}) => {
            const activeKey = this.getActiveKey(location);
            console.log('Active key:', activeKey);

            return (
              <div>
                <Tabs activeKey={activeKey} onChange={() => console.log('Tab Changed')}>
                  {this.renderTabPanes()}
                </Tabs>
              </div>
            )
          }}
          />
          {/* <Redirect from="/home" to="/home/first" /> */}
        </Router>
      </div>
    );
  }
}

export default Home;
