import React, { Component } from 'react'
import Exception from 'ant-design-pro/lib/Exception'
import 'ant-design-pro/dist/ant-design-pro.css'

const Authorization = allowedRoles => WrappedComponent => {
  return class WithAuthorization extends Component {
    constructor(props) {
      super(props)

      // In this case the user is hardcoded, but it could be loaded from anywhere.
      // Redux, MobX, RxJS, Backbone...
      this.state = {
        user: {
          name: 'vcarl',
          role: 'garage'
        }
      }
    }
    render() {
      const { role } = this.state.user
      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...this.props} />
      } else {
        return (
          <Exception
            style={{ minHeight: '100vh' }}
            type="403"
            desc="You aren't allowed to view this page"
          />
        )
      }
    }
  }
}

export default Authorization
