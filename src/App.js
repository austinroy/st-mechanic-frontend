import React, { Component } from 'react'
import './sass/main.scss'
import SiteFooter from './components/Footer/SiteFooter'
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
