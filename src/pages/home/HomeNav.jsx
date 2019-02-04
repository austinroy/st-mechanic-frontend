import React from 'react'

const HomeNav = () => (
  <div className="home-nav">
    <div className="logo-box">
      <img
        src="../../assets/logos/Logo-Black-&-Yellow.png"
        alt="logo"
        className="logo"
      />
    </div>
    <button className="btn-yellow-inverted signup-btn">Sign Up</button>
    <button className="btn-yellow login-btn">Login</button>
  </div>
)

export default HomeNav
