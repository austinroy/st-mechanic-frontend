import React from 'react'
import logo from '../../assets/logos/Logo-White-&-Yellow.png'

const HomeFooter = () => (
  <div>
    <div className="home-footer">
      <div className="home-footer-content">
        <div className="footer-section">
          <img src={logo} alt="" className="foot-logo" />
          <br />
          <br />
          <span className="footer-address">
            528, Kindaruma Road. Kilimani <br /> Nairobi, Kenya
          </span>
        </div>
        <div className="footer-section useful-links">
          <span className="footer-header">Company</span>
          <span className="footer-links">About</span>
          <span className="footer-links">Terms of Use</span>
          <span className="footer-links">Policy</span>
        </div>
        <div className="footer-section foot-services">
          <span className="footer-header">Services</span>
          <span className="footer-links">Sign Up</span>
          <span className="footer-links">How It Works</span>
          <span className="footer-links">Get a Quote</span>
          <span className="footer-links">Requirements</span>
        </div>
        <div className="footer-section foot-contact-us">
          <span className="footer-header">Contact US</span>
          <span className="footer-links">Our Shops</span>
          <span className="footer-links">Join Us</span>
        </div>
        <div className="footer-section">
          <span className="footer-links" />
          <span className="footer-links">+254 720000000</span>
          <span className="footer-links">+254 720000000</span>
          <span className="footer-links">stmechanic@mech.com</span>
        </div>
      </div>
    </div>
    <div className="rights-reserved u-center-text">
      <span className="rights-content">Copyright 2019 All Rights Reserved</span>
    </div>
  </div>
)

export default HomeFooter
