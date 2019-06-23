import React, { Component } from 'react'
import { Table, Input, Select } from 'antd'

const { Column, ColumnGroup } = Table
const { Option } = Select

class WheelsTable extends Component {
  render() {
    const data = [
      {
        checkAreas: 'Front Right Tyre'
      },
      {
        checkAreas: 'Front Left Tyre'
      },
      {
        checkAreas: 'Rear Right Tyre'
      },
      {
        checkAreas: 'Rear Left Tyre'
      },
      {
        checkAreas: 'Spare Tyre'
      },
      {
        checkAreas: 'Alloy Tyre'
      }
    ]

    return (
      <div>
        <Table bordered dataSource={data} pagination={false}>
          <ColumnGroup title="TYRES & WHEELS">
            <Column
              title="Check Areas"
              dataIndex="checkAreas"
              key="checkAreas"
            />
            <Column
              title="Tread Depth"
              dataIndex="treadDepth"
              key="treadDepth"
              render={(text, record) => (
                <Input style={{ border: 'none', width: '100%' }} />
              )}
            />
            <Column
              title="Condition"
              dataIndex="condition"
              key="condition"
              render={(text, record) => (
                <Select style={{ border: 'none', width: '100%' }}>
                  <Option value="normal">Normal</Option>
                  <Option value="uneven">Uneven</Option>
                  <Option value="bulging">Bulging</Option>
                </Select>
              )}
            />
          </ColumnGroup>
        </Table>
      </div>
    )
  }
}

export default WheelsTable
