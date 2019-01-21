import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import './sass/main.css'
import { Layout } from 'antd'
import SiteHeader from './components/Header/SiteHeader'
import SideMenu from './components/SideMenu/SideMenu'
import Segment from './components/Segment/Segment'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <SiteHeader />
        </Layout>
      </div>
    )
  }
}

export default App
