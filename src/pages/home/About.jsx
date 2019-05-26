import React from 'react'
import { Tabs, Card } from 'antd'

const { TabPane } = Tabs

const About = () => {
  return (
    <div className="about-section">
      <div className="u-center-text u-margin-top-medium">
        <h2>HOW IT WORKS</h2>
      </div>
      <Tabs
        defaultActiveKey="customers"
        tabBarStyle={{ textAlign: 'center', marginBottom: '0' }}
      >
        <TabPane tab="For Customers" key="customers">
          <div className="about-customers">
            <div className="customer-cards">
              <Card className="shadowed-card">
                <h2 className="u-center-text card-header">GET A QUOTE</h2>
                <p className="card-detail">
                  Give us your car details and choose the area of service you
                  would like. We take your car details to ensure we accurately
                  quote a service for you.
                </p>
              </Card>
              <Card className="shadowed-card yellow">
                <h2 className="u-center-text card-header">
                  SIGN IN & REVIEW QUOTES
                </h2>
                <p className="card-detail">
                  After entering quote details you will be directed to create an
                  account and sign in. View and select a quote from a garage.
                </p>
              </Card>
              <Card className="shadowed-card">
                <h2 className="u-center-text card-header">
                  BOOK AN APPOINTMENT
                </h2>
                <p className="card-detail">
                  Select a date you would like to check in. The garage will send
                  you a confirmation for your booking.
                </p>
              </Card>
              <Card className="shadowed-card yellow">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem doloremque nisi veniam blanditiis cum ipsam
                  repudiandae? Non repellat sapiente optio veniam earum vitae
                  dignissimos a? Enim adipisci repellendus numquam dolores?
                </div>
                <div className="value">
                  <h2 className="u-center-text">Transparency</h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum eius iusto assumenda quasi alias nobis saepe.
                  Repellendus, nesciunt. Nemo obcaecati error soluta, dolorem et
                  quisquam voluptates adipisci ducimus neque laudantium?
                </div>
                <div className="value">
                  <h2 className="u-center-text">Convenience</h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum cum impedit in asperiores numquam iusto aperiam quas
                  ab eius, iure, ratione, debitis cupiditate molestias fugit sit
                  voluptatibus perspiciatis corrupti quos.
                </div>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="For Garages" key="garages">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  )
}

export default About
