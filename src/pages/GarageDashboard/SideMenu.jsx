import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import logo from '../../assets/logos/Logo-White-&-Yellow.png'

const { SubMenu } = Menu

class SideMenu extends Component {
  render() {
    return (
      <div style={{ width: 256 }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          className="side-menu"
        >
          <div className="__logo-box">
            <img
              src={logo}
              className="__logo"
              alt="logo"
              style={{ height: '4rem', margin: '2rem' }}
            />
          </div>
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Parts</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Mechanics</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Payments</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Jobs</span>
              </span>
            }
          >
            <Menu.Item key="5">Bookings</Menu.Item>
            <Menu.Item key="6">Active</Menu.Item>
            <Menu.Item key="7">Completed</Menu.Item>
            <Menu.Item key="8">Disputed</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    )
  }
}

export default SideMenu
