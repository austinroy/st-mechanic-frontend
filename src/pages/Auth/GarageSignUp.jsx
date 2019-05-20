import React, { Component } from 'react'
import { Input, Button, Icon } from 'antd'
import Logo from '../../assets/logos/Logo-White-&-Yellow.png'

class GarageSignUp extends Component {
  render() {
    return (
      <div className="garage-signup">
        <div className="signup-image">
          <img src={Logo} alt="logo" className="signup-logo" />
          <p className="intro-text">
            Choose <br /> the best hands <br /> for your car
          </p>
          <p className="intro-sub">
            One stop shopping for all your automotive needs
            <br />
            Join us today
          </p>
          <button className="btn-more">
            View More <i className="down-arrow"> </i>
          </button>
        </div>

        <div className="signup-form">
          <div className="top-links u-margin-bottom-medium">
            <span className="link-signup underline-bottom">Sign Up</span>
            <span className="link-login">Log In</span>
          </div>
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
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Verify Password"
              className="u-margin-bottom-small"
            />
            <br />
            <Button type="primary" className="u-margin-bottom-small">
              Sign Up
            </Button>
          </form>
          <div>
            <div className="bottom-link">
              <span className="text u-center-text">let me in</span>
              <span className="next-icon u-center-text">
                <i className="right-arrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GarageSignUp
