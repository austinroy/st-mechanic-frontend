import React, { Component } from 'react'
import { Input, Button, Icon } from 'antd'

class GarageSignUp extends Component {
  render() {
    return (
      <div className="garage-login">
        <div className="signup-form">
          <h2>Sign Up Your Garage</h2>
          <form>
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
            <Button className="u-margin-bottom-small">Submit</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default GarageSignUp
