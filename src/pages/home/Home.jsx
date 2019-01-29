import React, { Component } from 'react'
import HomeHeader from '../../components/HomeHeader/HomeHeader.jsx'
import About from '../../components/AboutSection/About.jsx'

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <HomeHeader />
        <About />
      </div>
    )
  }
}

export default Home
