import React from 'react'
import vw from '../../assets/img/volkswagen.png'

const Pricing = () => (
  <div className="about-pricing">
    <div className="about-header u-center-text">
      Our Transparent
      <span className="slim"> Pricing</span>
    </div>
    <div className="pricing-info">
      <img src={vw} alt="vw" className="pricing-image" />
      <div className="pricing-details">
        <span className="pricing-label">Our Estimate is Instant!</span>
        <p className="pricing-description">
          We use 100s of data points to give you the best industry average of
          how much it will cost to repair your car even before garages send you
          a quote. This ensures that once you get quotes you are not just
          comparing between garages but you also have a baseline. Our algorithm
          also shows you the deviation from average. In addition, our quotes
          clearly breakdown labour and parts prices for your comparison.
        </p>
      </div>
    </div>
  </div>
)

export default Pricing
