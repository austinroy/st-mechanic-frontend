import React, { Component } from 'react'
import { DatePicker, Card, Statistic } from 'antd'

const { RangePicker } = DatePicker

class ReportsSummary extends Component {
  render() {
    return (
      <div className="reports" style={{ padding: '7rem' }}>
        <div>
          REPORTS FOR <RangePicker />
        </div>
        <div
          className="summary-cards u-margin-top-big u-center-text"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr'
          }}
        >
          <div>
            <Card
              hoverable
              style={{
                height: '27rem',
                width: '45.8rem',
                borderRadius: '1.5rem'
              }}
            >
              <Statistic
                value={482}
                precision={0}
                valueStyle={{ color: 'red', fontSize: '7rem' }}
              />
              <div className="u-center-text">
                <h1>Avg Time Per Service</h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                quas illo consequuntur praesentium odit dolores obcaecati nemo
                magni facere, quae et, facilis iste ratione deleniti autem.
                Repudiandae quae molestias natus.
              </div>
            </Card>
          </div>
          <div>
            <Card
              hoverable
              style={{
                height: '27rem',
                width: '45.8rem',
                borderRadius: '1.5rem'
              }}
            >
              <Statistic
                value={20000}
                precision={0}
                valueStyle={{ color: 'green', fontSize: '7rem' }}
                suffix={'/='}
              />
              <div className="u-center-text">
                <h1>Avg Time Per Service</h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                quas illo consequuntur praesentium odit dolores obcaecati nemo
                magni facere, quae et, facilis iste ratione deleniti autem.
                Repudiandae quae molestias natus.
              </div>
            </Card>
          </div>
          <div>
            <Card
              hoverable
              style={{
                height: '27rem',
                width: '45.8rem',
                borderRadius: '1.5rem'
              }}
            >
              <Statistic
                value={'1HR'}
                precision={0}
                valueStyle={{ color: 'teal', fontSize: '7rem' }}
              />
              <div className="u-center-text">
                <h1>Avg Time Per Service</h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                quas illo consequuntur praesentium odit dolores obcaecati nemo
                magni facere, quae et, facilis iste ratione deleniti autem.
                Repudiandae quae molestias natus.
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default ReportsSummary
