import React, { Component } from 'react'
import { Table, Input, Select } from 'antd'

const { Column, ColumnGroup } = Table
const { Option } = Select

class SuspensionTable extends Component {
  render() {
    const data = [
      {
        checkAreas: 'BRAKE PADS'
      },
      {
        checkAreas: 'ROAD SPRINGS'
      },
      {
        checkAreas: 'SHOCK ABSORBERS'
      },
      {
        checkAreas: 'SUSPENSION ARMS/MOUNTINGS'
      },
      {
        checkAreas: 'SUSPENSION ARMS/FIXINGD'
      },
      {
        checkAreas: 'TIE BARS/ANTIROLL BARS'
      },
      {
        checkAreas: 'BUSHES'
      },
      {
        checkAreas: 'STEERING JOINT/BALL JOINTS'
      },
      {
        checkAreas: 'STEERING JACK'
      },
      {
        checkAreas: 'POWER STEERING'
      }
    ]

    return (
      <div>
        <Table bordered dataSource={data} pagination={false}>
          <ColumnGroup title="SUSPENSION, STEERING & BRAKES">
            <Column
              title="Check Area"
              dataIndex="checkAreas"
              key="checkAreas"
            />
            <Column
              title="Condition(Front)"
              dataIndex="conditionFront"
              key="conditionFront"
              render={(text, record) => (
                <Select style={{ border: 'none', width: '100%' }}>
                  <Option value="normal">Normal</Option>
                  <Option value="uneven">Uneven</Option>
                  <Option value="bulging">Bulging</Option>
                </Select>
              )}
            />
            <Column
              title="Condition(Rear)"
              dataIndex="conditionRear"
              key="conditionRear"
              render={(text, record) => (
                <Select style={{ border: 'none', width: '100%' }}>
                  <Option value="normal">Normal</Option>
                  <Option value="uneven">Uneven</Option>
                  <Option value="bulging">Bulging</Option>
                </Select>
              )}
            />
            <Column
              title="Estimated Time to Replacement"
              dataIndex="replacementTime"
              key="replacementTime"
              render={(text, record) => (
                <Input style={{ border: 'none', width: '100%' }} />
              )}
            />
          </ColumnGroup>
        </Table>
      </div>
    )
  }
}

export default SuspensionTable
