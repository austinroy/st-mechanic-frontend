import React from 'react'
import Exception from 'ant-design-pro/lib/Exception'
import 'ant-design-pro/dist/ant-design-pro.css'

const NotFound = () => (
  <Exception style={{ minHeight: '100vh' }} type="404" desc="Page Not Found" />
)

export default NotFound
