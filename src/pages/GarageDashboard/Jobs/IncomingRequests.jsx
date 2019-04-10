import React, { Component } from 'react'
import { Table, Button } from 'antd'
import RequestModal from './RequestModal'

const columns = [
  { title: 'TIME REMAINING', dataIndex: 'time', key: 'time' },
  { title: 'DATE/TIME', dataIndex: 'date', key: 'date' },
  { title: 'NAME', dataIndex: 'name', key: 'name' },
  { title: 'CAR MODEL', dataIndex: 'model', key: 'model' },
  { title: 'SERVICE REQUEST', dataIndex: 'service', key: 'service' },
  {
    title: 'ACTIONS',
    dataIndex: 'actions',
    key: 'actions',
    render: () => (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <RequestModal service={data} />
        <Button>Ignore</Button>
      </div>
    )
  }
]

const data = {
  time: '1:20:10',
  date: '12/02/2019 21:11',
  name: 'Ashley Simpson',
  model: 'Volkswagen Golf',
  service: 'Break Pads Issue',
  year: '2017',
  engine: 'EP3-1.4L(1360 cc Euro 70-72 kW',
  vin: 'DVSUVCDBUIBSYUCVSA',
  category: 'brakes',
  type: 'Brake Replacement',
  notes:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

const dataArray = Array(20).fill(data)

const renderExpanded = record => (
  <div className="expanded-details">
    <div className="car-details">
      <div className="u-center-text">
        <h4> CAR DETAILS</h4>
      </div>
      <div className="details">
        <strong>CAR MODEL</strong> : {record.model}
        <br />
        <strong>YEAR</strong> : {record.year}
        <br />
        <strong>ENGINE TYPE</strong> : {record.engine}
        <br />
        <strong>VIN/ CHASIS NO</strong> : {record.vin}
        <br />
      </div>
    </div>
    <div className="service-description">
      <div className="u-center-text">
        <h4>SERVICE DESCRIPTI0N</h4>
      </div>
      <div className="details">
        <strong>CATEGORY</strong> : {record.category}
        <br />
        <strong>SERVICE TYPE</strong> : {record.service}
        <br />
        <strong>NOTES</strong> : {record.notes}
        <br />
      </div>
    </div>
  </div>
)

const RequestTable = () => {
  return (
    <Table
      columns={columns}
      expandedRowRender={record => renderExpanded(record)}
      dataSource={dataArray}
      expandIconColumnIndex={0}
      expandIconAsCell={false}
    />
  )
}

export default RequestTable
