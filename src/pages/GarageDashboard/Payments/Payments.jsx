import React, { Component } from 'react'
import { Tabs } from 'antd'
import { AST_SymbolConst } from 'terser';

const { TabPane } = Tabs

class Payments extends Component {
  render() {
    return (
      <div className="payments" style={{ padding: '7rem'}}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="RECEIVED" key="1">
            INCOMING REQUESTS
          </TabPane>
          <TabPane tab="TRANSFERRED" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="DISPUTED" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Payments
