// import React from 'react'

// const HomeNav = () => (
//   <div className="home-nav">
//     <div className="logo-box">
//       <img
//         src="../../assets/logos/Logo-Black-&-Yellow.png"
//         alt="logo"
//         className="logo"
//       />
//     </div>
//     <button className="btn-yellow-inverted signup-btn">Sign Up</button>
//     <button className="btn-yellow login-btn">Login</button>
//   </div>
// )

// export default HomeNav

import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as routeActions from '../../redux/actions/RouteActions'
import logo from '../../assets/logos/Logo-Black-&-Yellow.png'

class HomeNav extends Component {
  render() {
    const { activeRoute } = this.props
    return (
      <header className="home-nav">
        <div className="__logo-box">
          <img src={logo} className="__logo" alt="logo" />
        </div>
        <Menu
          theme="light"
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
            <button className="btn-login">Login</button>
          </Menu.Item>
          <Menu.Item key="login" style={{ float: 'right' }}>
            <button className="btn-signup">Sign Up</button>
          </Menu.Item>
        </Menu>
      </header>
    )
  }
}

HomeNav.defaultProps = {
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
)(HomeNav)
