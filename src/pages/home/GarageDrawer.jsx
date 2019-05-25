import React from 'react'
import { Drawer, Icon, Input, Button } from 'antd'

const GarageDrawer = props => {
  return (
    <Drawer
      placement="right"
      closable={true}
      onClose={props.onClose}
      visible={props.visible}
      width={960}
      height={1080}
      bodyStyle={{ backgroundColor: 'black' }}
    >
      <div className="signup-form">
        <div
          className="top-links u-margin-bottom-medium"
          style={{ textTransform: 'uppercase', display: 'block' }}
        >
          <span
            className="link-signup underline-bottom"
            style={{ float: 'left' }}
          >
            Sign Up
          </span>
          <span className="link-login" style={{ float: 'right' }}>
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
          <Button type="primary" className="u-margin-bottom-small">
            Sign Up
          </Button>
        </form>
        <div>
          <div className="bottom-link">
            <span className="text u-center-text">GO TO GARAGE LOGIN</span>
            <span className="next-icon u-center-text">
              <i className="right-arrow" />
            </span>
          </div>
        </div>
      </div>
    </Drawer>
  )
}

export default GarageDrawer
