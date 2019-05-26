import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as routeActions from '../../redux/actions/RouteActions'
import logo from '../../assets/logos/Logo-Black-&-Yellow.png'

class TopBar extends Component {
  render() {
    const { activeRoute } = this.props
    return (
      <header className="home-nav">
        <div className="__logo-box">
          <a href="/">
            <img src={logo} className="__logo" alt="logo" />
          </a>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[]}
          style={{ lineHeight: '64px' }}
          className="nav-menu"
        >
          <Menu.Item key="account" style={{ float: 'right' }}>
            <a href="/account" className="top-bar-link">
              My Account
            </a>
          </Menu.Item>
          <Menu.Item key="faq" style={{ float: 'right' }}>
            <a href="/faq" className="top-bar-link">
              FAQ
            </a>
          </Menu.Item>
          <Menu.Item key="contact" style={{ float: 'right' }}>
            <a href="/contact" className="top-bar-link">
              Contact Us
            </a>
          </Menu.Item>
        </Menu>
      </header>
    )
  }
}

TopBar.defaultProps = {
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
)(TopBar)
