import React from 'react'
import { Card } from 'antd'
import Lottie from 'react-lottie'
import animationDataSchedule from '../../assets/lotties/schedule'
import animationDataPay from '../../assets/lotties/pay'
import animationDataQuotes from '../../assets/lotties/click'

const { Meta } = Card

const AboutCard = props => {
  const { title, description, cardName } = props
  let animationData

  if (cardName === 'quotes') {
    animationData = animationDataQuotes
  }
  if (cardName === 'book') {
    animationData = animationDataSchedule
  }
  if (cardName === 'pay') {
    animationData = animationDataPay
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="u-center-content">
      <Card
        style={{ width: 300 }}
        cover={<Lottie options={defaultOptions} height={300} width={300} />}
      >
        <Meta title={title} description={description} />
      </Card>
    </div>
  )
}

export default AboutCard
