import React from 'react'
import { Layout, Menu } from 'antd'

const { Header } = Layout

const SiteHeader = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">For Car Owners</Menu.Item>
        <Menu.Item key="2">For Garages</Menu.Item>
        <Menu.Item key="3">About Us</Menu.Item>
      </Menu>
    </Header>
  )
}

export default SiteHeader
