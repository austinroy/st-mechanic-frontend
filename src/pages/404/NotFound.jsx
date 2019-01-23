import React from 'react'
import { Empty } from 'antd'

const NotFound = () => (
  <Empty
    description={
      <span>
        <h1>Error 404</h1>
        <br />
        Page Not Found
        <br />
        Return <a href="/">Home</a>
      </span>
    }
  />
)

export default NotFound
