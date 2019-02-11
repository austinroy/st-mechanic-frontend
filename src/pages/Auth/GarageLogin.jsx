import React, { Component } from 'react'
import { Input, Button, Icon } from 'antd'

class GarageLogin extends Component {
  render() {
    return (
      <div className="garage-login">
        <div className="login-form">
          <h2>Garage Log In</h2>
          <form>
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
            <Button className="u-margin-bottom-small">Login</Button>
            <br />
            No account? Sign Up <a href="/garage-signup">Here</a>
          </form>
        </div>
      </div>
    )
  }
}

export default GarageLogin
