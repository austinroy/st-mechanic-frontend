import React, { Component } from 'react'
import { Tabs } from 'antd'

const { TabPane } = Tabs

class PartsManagement extends Component {
  render() {
    return (
      <div className="parts-management" style={{ padding: '7rem'}}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="PARTS" key="1">
            INCOMING REQUESTS
          </TabPane>
          <TabPane tab="TUNING & STYLING" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="WHEELS, TYRES & TRIMS" key="3">
            Content of Tab Pane 3
          </TabPane>
          <TabPane tab="ACCESSORIES" key="4">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default PartsManagement
