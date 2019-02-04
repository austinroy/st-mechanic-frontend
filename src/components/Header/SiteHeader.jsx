import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as routeActions from '../../redux/actions/RouteActions'
import logo from '../../assets/Source Files/Logo White & Yellow/Logo White & Yellow.png'

const { Header } = Layout

class SiteHeader extends Component {
  render() {
    const { activeRoute } = this.props
    return (
      <Header className="header site-header">
        <div className="__logo-box">
          <img src={logo} className="__logo" alt="logo" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[]}
          style={{ lineHeight: '64px' }}
          className="nav-menu"
        >
          <Menu.Item key="car owners">
            <a href="/">For Car Owners</a>
          </Menu.Item>
          <Menu.Item key="garages">
            <a href="/">For Garages</a>
          </Menu.Item>
          <Menu.Item key="about us">
            <a href="/">About Us</a>
          </Menu.Item>
          <Menu.Item key="login" style={{ float: 'right' }}>
            <a href="/login">Login</a>
          </Menu.Item>
        </Menu>
      </Header>
    )
  }
}

SiteHeader.defaultProps = {
  activeRoute: ''
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeRoute: state.activeRoute
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(routeActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteHeader)
