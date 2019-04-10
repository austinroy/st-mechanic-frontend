import React, { Component } from 'react'
import { Table, Button } from 'antd'

const columns = [
  { title: 'DATE', dataIndex: 'date', key: 'date' },
  { title: 'PAID WITH ', dataIndex: 'paidwith', key: 'paidwith' },
  { title: 'TRANSACTION ID', dataIndex: 'transid', key: 'transid' },
  { title: 'TIME RECIEVED', dataIndex: 'time', key: 'time' },
  {
    title: 'ACTIONS',
    dataIndex: 'actions',
    key: 'actions',
    render: () => (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <Button type="primary">Update</Button>
      </div>
    )
  }
]

const data = {
  date: '12/02/2019',
  name: 'Ashley Simpson',
  paidwith: 'MPESA',
  transid: 'LHR9WFGEBPFHBDSJAKBE',
  time: '1:20:12',
  amount: '15000'
}

const dataArray = Array(20).fill(data)

const DisputedTable = () => {
  return <Table columns={columns} dataSource={dataArray} />
}

export default DisputedTable
