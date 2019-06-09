import React from 'react'
import { Table, Rate } from 'antd'

const columns = [
  { title: 'MECHANIC', dataIndex: 'mechanic', key: 'mechanic' },
  {
    title: 'AVG RATING ',
    dataIndex: 'rating',
    key: 'rating',
    render: () => <Rate value="5" />
  }
]

const data = { mechanic: 'The Fixer', rating: '5' }
const dataArray = Array(10).fill(data)

const TopMechanicsTable = () => {
  return (
    <div>
      <Table bordered columns={columns} dataSource={dataArray} scroll="200px" />
    </div>
  )
}

export default TopMechanicsTable
