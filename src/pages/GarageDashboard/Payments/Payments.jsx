import React, { Component } from 'react'
import { Tabs } from 'antd'
import ReceivedTable from './Received'
import TransferredTable from './Transferred'
import DisputedTable from './Disputed'

const { TabPane } = Tabs

class Payments extends Component {
  render() {
    return (
      <div className="payments" style={{ padding: '7rem' }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="RECEIVED" key="1">
            <ReceivedTable />
          </TabPane>
          <TabPane tab="TRANSFERRED" key="2">
            <TransferredTable />
          </TabPane>
          <TabPane tab="DISPUTED" key="3">
            <DisputedTable />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Payments
