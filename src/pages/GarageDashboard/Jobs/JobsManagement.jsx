import React, { Component } from 'react'
import { Tabs } from 'antd'
import RequestTable from './IncomingRequests'
import BookingTable from './Bookings'
import ActiveJobTable from './ActiveJobs';
import CompletedJobTable from './CompletedJobs';

const { TabPane } = Tabs

class JobsManagement extends Component {
  render() {
    return (
      <div className="jobs-management" style={{ padding: '7rem' }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="INCOMING REQUESTS" key="1">
            <RequestTable />
          </TabPane>
          <TabPane tab="BOOKINGS" key="2">
            <BookingTable />
          </TabPane>
          <TabPane tab="ACTIVE JOBS" key="3">
            <ActiveJobTable />
          </TabPane>
          <TabPane tab="COMPLETE JOBS" key="4">
            <CompletedJobTable />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default JobsManagement
