import React, { Component } from 'react'
import './sass/main.scss'
import { Layout } from 'antd'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>{this.props.children}</Layout>
      </div>
    )
  }
}

export default App
