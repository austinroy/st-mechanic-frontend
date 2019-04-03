import React, { Component } from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs

class JobsManagement extends Component {
  render() {
    return (
      <div className="jobs-management" style={{ padding: '7rem'}}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="INCOMING REQUESTS" key="1">
            INCOMING REQUESTS
          </TabPane>
          <TabPane tab="BOOKINGS" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="ACTIVE JOBS" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="COMPLETE JOBS" key="4">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default JobsManagement
