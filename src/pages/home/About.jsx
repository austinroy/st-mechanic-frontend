import React from 'react'
import { Tabs, Card, Icon } from 'antd'

const { TabPane } = Tabs

const About = () => {
  return (
    <div className="about-section" id="how-it-works">
      <div className="u-center-text u-margin-top-medium">
        <h2>HOW IT WORKS</h2>
      </div>
      <Tabs
        defaultActiveKey="customers"
        tabBarStyle={{
          textAlign: 'center',
          marginBottom: '0',
          color: 'black'
        }}
      >
        <TabPane tab="For Customers" key="customers">
          <div className="about-customers">
            <div className="customer-cards">
              <Card className="shadowed-card">
                <div className="u-center-text">
                  <Icon
                    style={{
                      fontSize: '5rem'
                    }}
                    type="unordered-list"
                  />
                </div>
                <br />
                <h2 className="u-center-text card-header">GET A QUOTE</h2>
                <p className="card-detail">
                  Give us your car details and choose the area of service you
                  would like. We take your car details to ensure we accurately
                  quote a service for you.
                </p>
              </Card>
              <Card className="shadowed-card yellow">
                <div className="u-center-text">
                  <Icon
                    style={{
                      fontSize: '5rem'
                    }}
                    type="notification"
                  />
                </div>
                <br />
                <h2 className="u-center-text card-header">
                  SIGN IN & REVIEW QUOTES
                </h2>
                <p className="card-detail">
                  After entering quote details you will be directed to create an
                  account and sign in. View and select a quote from a garage.
                </p>
              </Card>
              <Card className="shadowed-card">
                <div className="u-center-text">
                  <Icon
                    style={{
                      fontSize: '5rem'
                    }}
                    type="calendar"
                  />
                </div>
                <br />
                <h2 className="u-center-text card-header">
                  BOOK AN APPOINTMENT
                </h2>
                <p className="card-detail">
                  Select a date you would like to check in. The garage will send
                  you a confirmation for your booking.
                </p>
              </Card>
              <Card className="shadowed-card yellow">
                <div className="u-center-text">
                  <Icon
                    style={{
                      fontSize: '5rem'
                    }}
                    type="setting"
                  />
                </div>
                <br />
                <h2 className="u-center-text card-header">
                  GET YOUR CAR FIXED
                </h2>
                <p className="card-detail">
                  Check in your car to your selected garage on your booking date
                  and get your car fixed.
                </p>
              </Card>
            </div>
            <div className="core-values">
              <span
                style={{
                  fontSize: '4rem',
                  fontWeight: 'medium'
                }}
              >
                Our Core Values
              </span>
              <div className="values">
                <div className="value u-margin-top-small">
                  <h2 className="u-center-text">Trust</h2>
                  We look to create a platform where you can trust a garage to
                  provide you with the best quality service possible.
                </div>
                <div className="value">
                  <h2 className="u-center-text">Transparency</h2>
                  Be able to track all processes from start to finish with all
                  your details available at the click of a buttton.
                </div>
                <div className="value">
                  <h2 className="u-center-text">Convenience</h2>
                  Access a variety of services from the comfort of your
                  computer.
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="For Garages" key="garages">
          <div className="about-garages">
            <div className="garage-cards">
              <Card className="shadowed-card">
                <div className="u-center-text">
                  <Icon
                    style={{
                      fontSize: '5rem'
                    }}
                    type="login"
                  />
                </div>
                <br />
                <h2 className="u-center-text card-header">SIGN IN</h2>
                <p className="card-detail">
                  Enter your garage details and get an account with us. We shall
                  get in touch. Update profile once approved.
                </p>
              </Card>
              <Card className="shadowed-card blue">
                <div className="u-center-text">
                  <Icon
                    style={{
                      fontSize: '5rem'
                    }}
                    type="notification"
                  />
                </div>
                <br />
                <h2 className="u-center-text card-header">RESPOND TO QUOTES</h2>
                <p className="card-detail">
                  View the list of available requests. Pick any and send a free,
                  fast, fair and transparent price quote.
                </p>
              </Card>
              <Card className="shadowed-card">
                <div className="u-center-text">
                  <Icon
                    style={{
                      fontSize: '5rem'
                    }}
                    type="calendar"
                  />
                </div>
                <br />
                <h2 className="u-center-text card-header">SEE BOOKINGS</h2>
                <p className="card-detail">
                  View a list of bookings for your garage and send confirmation
                  message to customers
                </p>
              </Card>
              <Card className="shadowed-card blue">
                <div className="u-center-text">
                  <Icon
                    style={{
                      fontSize: '5rem'
                    }}
                    type="wallet"
                  />
                </div>
                <br />
                <h2 className="u-center-text card-header">
                  CHECK IN CUSTOMERS AND EARN
                </h2>
                <p className="card-detail">
                  Check in customers car to your garage on the date of the
                  booking and start the work.
                </p>
              </Card>
            </div>
            
            <div className="garage-breakdown">
              <div className="breakdown-requirements">
                <span className="breakdown-header">
                  What are the requirements?
                </span>
                <div className="breakdown-details">
                  <Icon type="check" /> Must inspire TRUST every single time
                  <br />
                  <Icon type="check" /> Must be a registered business <br />
                  <Icon type="check" /> Must be centrally managed <br />
                  <Icon type="check" /> Must be in a secure location <br />
                  <Icon type="check" /> Must demonstrate staff competence 
                  <br />
                </div>
              </div>
              <div className="breakdown-reasons">
                <span className="breakdown-header">Why join St. Mechanic?</span>
                <div className="breakdown-details">
                  <Icon type="check" /> To access to a wider market
                  <br />
                  <Icon type="check" /> To benefit from Automated processes
                  hence efficiency <br />
                  <Icon type="check" /> To gain competitive advantage using our
                  tools <br />
                  <Icon type="check" /> To highlight what you are already great
                  at <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default About
