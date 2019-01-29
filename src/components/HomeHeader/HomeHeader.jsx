import React from 'react'
import logo from '../../logo.svg'

const Header = () => {
  return (
    <header className="header-home">
      <div className="__logo-box">
        <img src={logo} className="__logo" alt="logo" /> St Mechanic
      </div>
      <div className="__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">
            TRUST, TRASPARENCY & CONVENEINCE
          </span>
          <span className="heading-primary--sub">
            brought to your repair experience
          </span>
        </h1>

        <a href="#" className="btn btn--white btn--animated">
          Get a Quote
        </a>
      </div>
    </header>
  )
}

export default Header
