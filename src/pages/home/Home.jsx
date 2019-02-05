import React, { Component } from 'react'
import Header from './Header.jsx'
import About from './About.jsx'
import HomeNav from './HomeNav.jsx'
import Pricing from './Pricing.jsx'
import GetQuotes from './GetQuotes.jsx'
import HomeFooter from './HomeFooter.jsx';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <HomeNav />
        <Header />
        <About />
        <Pricing />
        <GetQuotes />
        <HomeFooter />
      </div>
    )
  }
}

export default Home
