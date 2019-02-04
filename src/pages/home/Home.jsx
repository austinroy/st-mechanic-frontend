import React, { Component } from 'react'
import Header from './Header.jsx'
import About from './About.jsx'
import HomeNav from './HomeNav.jsx'

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <HomeNav />
        <Header />
        <About />
      </div>
    )
  }
}

export default Home
