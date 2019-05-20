import React, { Component } from 'react'
import { DatePicker, Card } from 'antd'

const { RangePicker } = DatePicker

class ReportsSummary extends Component {
  render() {
    return (
      <div className="reports" style={{ padding: '7rem' }}>
        <div>
          REPORTS FOR <RangePicker />
        </div>
        <div
          className="summary-cards u-margin-top-huge"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: '7rem'
          }}
        >
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </div>
    )
  }
}

export default ReportsSummary
