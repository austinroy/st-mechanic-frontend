import React, { Component } from 'react'
import SideMenu from './SideMenu'
import { Route, Switch } from 'react-router-dom'
import { Tabs } from 'antd'
import JobsManagement from './Jobs/JobsManagement'
import TopBar from './TopBar'
import Payments from './Payments/Payments';
import PartsManagement from './Parts/PartsManagement';

const { TabPane } = Tabs

class GarageDashboard extends Component {
  render() {
    return (
      <div className="garage-dashboard">
        <TopBar />
        <Tabs defaultActiveKey="1" tabBarStyle={{ textAlign: 'center' }}>
          <TabPane tab="JOBS & QUOTES" key="1">
            <JobsManagement />
          </TabPane>
          <TabPane tab="PARTS MANAGEMENT" key="2">
            <PartsManagement />
          </TabPane>
          <TabPane tab="PAYMENTS" key="3">
            <Payments />
          </TabPane>
          <TabPane tab="REPORTS" key="4">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        ,
      </div>
    )
  }
}

export default GarageDashboard
