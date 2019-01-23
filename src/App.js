import React, { Component } from 'react'
// import logo from './logo.svg'
import './sass/main.scss'
import { Layout } from 'antd'
import SiteHeader from './components/Header/SiteHeader'
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
