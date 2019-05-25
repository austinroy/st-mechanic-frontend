import React from 'react'
import Logo from '../../assets/logos/Logo-White-&-Yellow.png'

const Header = () => {
  return (
    <div className="header-home">
      <div className="header-nav">
        <div>
          <img src={Logo} alt="logo" className="home-logo" />
        </div>
        <div className="home-links u-margin-top-medium">
          <a href="#" className="home-link--regular">
            ABOUT US
          </a>
          <a href="#" className="home-link--regular">
            HOW IT WORKS
          </a>
          <a href="#" className="home-link--regular">
            FOR GARAGES
          </a>
          <a href="#" className="home-link--btn-inverted">
            LOGIN
          </a>
          <a href="#" className="home-link--btn">
            SIGN UP
          </a>
        </div>
      </div>
      <div className="intro u-margin-bottom-big">
        <p className="intro-text">
          Choose <br /> the best <span className="underline-bottom">hands</span>
          <br /> for your car
        </p>
        <p className="intro-sub">
          One stop shopping for all your automotive needs
          <br />
          Join us today
        </p>
      </div>
    </div>
  )
}

export default Header
