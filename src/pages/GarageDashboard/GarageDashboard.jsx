import React, { Component } from 'react'
import SideMenu from './SideMenu'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import JobsManagement from './Jobs/JobsManagement'

const { Content, Sider } = Layout

class GarageDashboard extends Component {
  render() {
    return (
      <div className="garage-dashboard">
        <Layout>
          <Sider>
            <SideMenu />
          </Sider>
          <Content style={{ position: 'relative' }}>
            <Switch>
              <Route exact path="/garagedashboard/parts" />
              <Route exact path="/garagedashboard/mechanics" />
              <Route exact path="/garagedashboard/payments" />
              <Route
                exact
                path="/garagedashboard/jobs"
                render={() => <JobsManagement />}
              />
              <Route exact path="/garagedashboard/jobs/bookings" />
              <Route exact path="/garagedashboard/active" />
              <Route exact path="/garagedashboard/completed" />
              <Route exact path="/garagedashboard/disputed" />
            </Switch>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default GarageDashboard
