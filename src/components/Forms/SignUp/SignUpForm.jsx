import React, { Component } from 'react'
import { Input, Icon, Button } from 'antd'

class SignUpForm extends Component {
  render() {
    return (
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form>
          <Input placeholder="First Name" className="u-margin-bottom-small" />
          <Input placeholder="Last Name" className="u-margin-bottom-small" />
          <Input placeholder="Phone Number" className="u-margin-bottom-small" />
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
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
    )
  }
}

export default SignUpForm
