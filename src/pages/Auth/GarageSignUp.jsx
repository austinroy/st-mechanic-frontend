import React, { Component } from 'react'
import { Input, Button, Icon } from 'antd'
import Banner from '../../assets/img/standard-street-view 2.png'
import Logo from '../../assets/logos/Logo-Black-&-Yellow.png'

class GarageSignUp extends Component {
  render() {
    return (
      <div className="garage-signup">
        <div className="signup-image">
          <img src={Banner} alt="signup-image" className="img-signup" />
        </div>
        <div className="signup-form">
          <img src={Logo} alt="logo" className="signup-logo" />
          <br />
          <span className="signup-header">Try us out!</span>
          <br />
          <span className="signup-subheader">
            Sign Up Your Garage to get started
          </span>
          <form className="u-margin-top-medium">
            <Input
              placeholder="Garage Name"
              className="u-margin-bottom-small"
            />
            <Input
              placeholder="Garage Location"
              className="u-margin-bottom-small"
            />
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email Address"
              className="u-margin-bottom-small"
            />
            <br />
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Password"
              className="u-margin-bottom-small"
            />
            <br />
            <Button type="primary" className="u-margin-bottom-small">
              Sign Up
            </Button>
            <br />
            Already have an account?{' '}
            <a href="/garage-login" className="login-link">
              Login
            </a>
          </form>
        </div>
      </div>
    )
  }
}

export default GarageSignUp
