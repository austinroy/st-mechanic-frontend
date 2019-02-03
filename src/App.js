import React, { Component } from 'react'
import './sass/main.scss'
import { Layout } from 'antd'
import SiteFooter from './components/Footer/SiteFooter'
import SiteHeader from './components/Header/SiteHeader'
class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteHeader />
        <Layout style={{ minHeight: '90vh' }}>{this.props.children}</Layout>
        <Layout>
          <SiteFooter />
        </Layout>
      </div>
    )
  }
}

export default App
