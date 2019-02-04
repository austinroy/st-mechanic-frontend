import React, { Component } from 'react'
import HomeHeader from '../../components/HomeHeader/HomeHeader.jsx'
import Header from './Header.jsx'
import About from './About.jsx'

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Header />
        <About />
      </div>
    )
  }
}

export default Home
