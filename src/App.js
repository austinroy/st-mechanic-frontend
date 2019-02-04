import React, { Component } from 'react'
import './sass/main.scss'
import { Layout } from 'antd'
import SiteFooter from './components/Footer/SiteFooter'
import SiteHeader from './components/Header/SiteHeader'
class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
        <SiteFooter />
      </div>
    )
  }
}

export default App
