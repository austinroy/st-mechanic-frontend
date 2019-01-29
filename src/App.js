import React, { Component } from 'react'
import './sass/main.scss'
import { Layout } from 'antd'
import SiteFooter from './components/Footer/SiteFooter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>{this.props.children}</Layout>
        <Layout>
          <SiteFooter />
        </Layout>
      </div>
    )
  }
}

export default App
