import React, { Component } from 'react'
import { Input, Button, Icon } from 'antd'
import Banner from '../../assets/img/Relic-55.png'
import Logo from '../../assets/logos/Logo-Black-&-Yellow.png'

class GarageLogin extends Component {
  render() {
    return (
      <div className="garage-login">
       <div className="signup-image">
          <img src={Banner} alt="login-image" className="img-login" />
        </div>
        <div className="login-form">
          <img src={Logo} alt="logo" className="login-logo" />
          <h2 className="login-header">Welcome Back!</h2>
          <h3 className="login-subheader">Sign in to Continue</h3>
          <form className="u-margin-top-medium">
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              className="u-margin-bottom-small"
            />
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
              className="u-margin-bottom-small"
            />
            <Button type="primary" className="u-margin-bottom-small">
              Login
            </Button>
            <br />
            No account? Sign Up{' '}
            <a href="/garage-signup" className="signup-link">
              Here
            </a>
            <br/>
            <a href="/">Forgot password</a>
          </form>
        </div>
      </div>
    )
  }
}

export default GarageLogin
