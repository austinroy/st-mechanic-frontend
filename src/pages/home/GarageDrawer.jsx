import React, { useState, useEffect } from 'react'
import { Drawer, Icon, Input, Button, Radio } from 'antd'
import Notifications, { notify } from 'react-notify-toast'

const submitLogin = () => {
  notify.show('Signed In', 'success')
  return setTimeout(() => window.location.replace('/garagedashboard'), 1000)
}

const signupForm = setFormType => {
  return (
    <div className="signup-form">
      <div
        className="top-links u-margin-bottom-medium"
        style={{ textTransform: 'uppercase', display: 'block' }}
      >
        <span
          className="link-signup underline-bottom"
          style={{ float: 'left', borderBottom: '.3rem solid yellow' }}
        >
          Sign Up
        </span>
        <span
          className="link-login"
          style={{ float: 'right' }}
          onClick={() => setFormType('login')}
        >
          Log In
        </span>
      </div>
      <form className="u-margin-top-medium">
        <Input placeholder="Garage Name" className="u-margin-bottom-small" />
        <br />
        <br />
        <Input
          placeholder="Garage Location"
          className="u-margin-bottom-small"
        />
        <br />
        <br />
        <Input
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email Address"
          className="u-margin-bottom-small"
        />
        <br />
        <br />
        <Input.Password
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Password"
          className="u-margin-bottom-small"
        />
        <br />
        <br />
        <Input.Password
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Verify Password"
          className="u-margin-bottom-small"
        />
        <br />
        <br />
        <br />
        <Button
          type="primary"
          className="u-margin-bottom-small"
          onClick={submitLogin}
        >
          Sign Up
        </Button>
      </form>
      <div>
        <div className="bottom-link">
          <span className="text u-center-text">GO TO CUSTOMER LOGIN</span>
          <span className="next-icon u-center-text">
            <i className="right-arrow" />
          </span>
        </div>
      </div>
    </div>
  )
}

const loginForm = setFormType => {
  return (
    <div className="signup-form">
      <div
        className="top-links u-margin-bottom-medium"
        style={{ textTransform: 'uppercase', display: 'block' }}
      >
        <span
          className="link-signup"
          style={{ float: 'left' }}
          onClick={() => setFormType('signup')}
        >
          Sign Up
        </span>
        <span
          className="link-login"
          style={{ float: 'right', borderBottom: '.3rem solid yellow' }}
        >
          Log In
        </span>
      </div>
      <form className="u-margin-top-medium">
        <Input
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email Address"
          className="u-margin-bottom-small"
        />
        <br />
        <br />
        <Input.Password
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Password"
          className="u-margin-bottom-small"
        />
        <br />
        <br />
        <Radio size="small" style={{ color: '#6E6D6B' }}>
          Remember Me
        </Radio>
        <br />
        <br />
        <Button
          type="primary"
          className="u-margin-bottom-small"
          onClick={submitLogin}
        >
          Sign In
        </Button>
      </form>
      <div>
        <div className="bottom-link">
          <span className="text u-center-text">GO TO CUSTOMER LOGIN</span>
          <span className="next-icon u-center-text">
            <i className="right-arrow" />
          </span>
        </div>
      </div>
    </div>
  )
}

const chooseForm = (formType, setFormType) => {
  if (formType === 'login') return loginForm(setFormType)
  return signupForm(setFormType)
}

const GarageDrawer = props => {
  const [formType, setFormType] = useState('login')
  const form = chooseForm(formType, setFormType)
  return (
    <Drawer
      placement="right"
      closable={true}
      onClose={props.onClose}
      visible={props.visible}
      width={840}
      height={1080}
      bodyStyle={{ backgroundColor: 'black' }}
      setFormType={setFormType}
    >
      <Notifications />
      {form}
    </Drawer>
  )
}

export default GarageDrawer
