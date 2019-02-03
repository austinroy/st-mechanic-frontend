import React, { Component } from 'react'
import { Form, Button, Checkbox, Input, Icon } from 'antd'

class LoginForm extends Component {
  render() {
    return (
      <div className="login-form">
        <h2>Log In</h2>
        <form>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
          <Input.Password
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Password"
          />
        </form>
      </div>
    )
  }
}

export default LoginForm
