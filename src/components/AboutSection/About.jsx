import React from 'react'
import AboutCard from './AboutCards'

const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Get a garage in a few clicks</h2>
      </div>
      <div className="about-cards u-center-text">
        <AboutCard
          cardName="quotes"
          title="Estimate then Quotes in few clicks"
          description="Tell us about your car and service you need."
        />

        <AboutCard
          cardName="book"
          title="Review and Book"
          description="Choose a garage, pick and time and day. Show up"
        />

        <AboutCard
          cardName="pay"
          title="Pay Securely"
          description="Pay upfront or hold you service with a fee and pay"
        />
      </div>
      <div className="about-pricing">
        <div className="u-center-text u-margin-top-medium">
          <h2>Ours Transparent Pricing</h2>
        </div>
        <div className="u-margin-bottom-big u-center-text">
          <p>
            We use 100s of data points to give you the best industry average of
            how much it will cost to repair your car even before garages send
            you a quote. This ensures that once you get quotes you are not just
            comparing between garages but you also have a baseline. Our
            algorithm also shows you the deviation from average. In addition,
            our quotes clearly breakdown labour and parts prices for your
            comparison.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
