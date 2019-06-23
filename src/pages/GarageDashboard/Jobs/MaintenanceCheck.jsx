import React, { Component } from 'react'
import TopBar from './../TopBar'
import { Table, Input, Select } from 'antd'

class MaintenanceCheck extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'white' }}>
        <TopBar />
        <div className="maintenance-check-container">
          <div className="status-check-header">
            <div className="inner-header">
              <div className="header-text">35 POINT STATUS CHECK</div>
            </div>
            <div className="header-content">
              <div>
                <div className="content-row">
                  <div className="detail-label">Car Model</div>
                  <div>Peugot</div>
                </div>
                <div className="content-row">
                  <div className="detail-label">YEAR</div>
                  <div>2017</div>
                </div>
              </div>
              <div>
                <div className="content-row">
                  <div className="detail-label">ENGINE TYPE</div>
                  <div>EP3 — 1.4 L (1,360 cc) Euro 4 70-72 kW.</div>
                </div>
                <div className="content-row">
                  <div className="detail-label">VIN/CHASIS NO.</div>
                  <div>VF32HRHYF43242177</div>
                </div>
              </div>
              <div>
                <div className="content-row">
                  <div className="detail-label">MECHANIC</div>
                  <div>VINCENT KAMAU</div>
                </div>
              </div>
            </div>
          </div>
          <div className="maintenancecheckbody">
            <Table>
              
            </Table>
          </div>
        </div>
      </div>
    )
  }
}

export default MaintenanceCheck
