import React, { Component } from 'react'
import { Table, Input, Select } from 'antd'
import TextArea from 'antd/lib/input/TextArea';

const { Column, ColumnGroup } = Table
const { Option } = Select

class ElectricalTable extends Component {
  render() {
    const data = [
      {
        checkAreas: 'HEADLIGHTS'
      },
      {
        checkAreas: 'SIDE LIGHTS/RUNNING LIGHTS'
      },
      {
        checkAreas: 'INDICATORS/HAZARD LIGHTS'
      },
      {
        checkAreas: 'REAR LIGHTS/NUMBER PLATE LIGHTS'
      },
      {
        checkAreas: 'REVERSE/ FOG LIGHTS'
      },
      {
        checkAreas: 'AUXILLARY LIGHTS'
      },
      {
        checkAreas: 'SWITCHES/ CONTROLS'
      },
      {
        checkAreas: 'HORN'
      },
      {
        checkAreas: 'WIPERS/WASHERS'
      }
    ]

    return (
      <div>
        <Table bordered dataSource={data} pagination={false}>
          <ColumnGroup title="ELECTRICAL">
            <Column
              title="Electrical/ Controls"
              dataIndex="checkAreas"
              key="checkAreas"
              width={500}
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
            <Column
              title="Comment"
              dataIndex="comment"
              key="comment"
              render={(text, record) => (
                <TextArea style={{ border: 'none', width: '100%' }} />
              )}
            />
          </ColumnGroup>
        </Table>
      </div>
    )
  }
}

export default ElectricalTable
