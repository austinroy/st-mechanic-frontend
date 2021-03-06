import React, { Component } from 'react'
import { Tabs } from 'antd'
import JobsManagement from './Jobs/JobsManagement'
import TopBar from './TopBar'
import Payments from './Payments/Payments'
import PartsManagement from './Parts/PartsManagement'
import ReportsSummary from './Reports/ReportsSummary'
import Animate from 'rc-animate'

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
            <ReportsSummary />
          </TabPane>
        </Tabs>
        ,
      </div>
    )
  }
}

export default GarageDashboard
