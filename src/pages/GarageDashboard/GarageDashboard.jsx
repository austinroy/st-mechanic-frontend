import React, { Component } from 'react'
import SideMenu from './SideMenu'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import { relative } from 'upath';

const { Content, Sider } = Layout

class GarageDashboard extends Component {
  render() {
    return (
      <div className="garage-dashboard">
        <Layout>
          <Sider>
            <SideMenu />
          </Sider>
          <Content style={{ position: 'relative' }}>
            <div>Dashboard</div>
          </Content>
        </Layout>
      </div>
    )
  }
}

export default GarageDashboard
