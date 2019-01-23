import React from 'react'
import logo from '../../logo.svg'

const Header = () => {
  return (
    <header className="header-home">
      <div className="__logo-box">
        <img src={logo} className="__logo" alt="logo" />
      </div>
      <div className="__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">St. Mechanic</span>
          <span className="heading-primary--sub">
            Car servicing at the click of a button
          </span>
        </h1>

        <a href="#" className="btn btn--white btn--animated">
          Fix me up
        </a>
      </div>
    </header>
  )
}

export default Header
