import React, { Component } from 'react'
import SideMenu from './SideMenu'
import { Route, Switch } from 'react-router-dom'
import { Tabs } from 'antd'
import JobsManagement from './Jobs/JobsManagement'
import TopBar from './TopBar'

const { TabPane } = Tabs

class GarageDashboard extends Component {
  render() {
    return (
      <div className="garage-dashboard">
        <TopBar />
        <Tabs defaultActiveKey="1" tabBarStyle={{ textAlign: 'center' }}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
        ,
      </div>
    )
  }
}

export default GarageDashboard
