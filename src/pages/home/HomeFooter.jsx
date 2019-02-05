import React from 'react'
import logo from '../../assets/logos/Logo-Black-&-Yellow.png'

const HomeFooter = () => (
  <div className="home-footer">
    <div className="home-footer-content">
      <div>
        <img src={logo} alt="" className="foot-logo" />
      </div>
      <div className="useful-links">
        <span className="footer-header">Useful Links</span>
      </div>
      <div className="foot-services">
      <span className="footer-header">Services</span>
      </div>
      <div className="foot-contact-us">
        <span className="footer-header">Contact US</span>
      </div>
      <div className="foot-follow-us">
        <span className="footer-header">Follow Us</span>
      </div>
    </div>
  </div>
)

export default HomeFooter
