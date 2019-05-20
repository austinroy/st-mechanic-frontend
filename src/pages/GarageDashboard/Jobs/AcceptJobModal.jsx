import React from 'react'
import { Modal, Button, Input, Form, Radio, Divider } from 'antd'
import Lottie from 'react-lottie'
import cardAnimationData from '../../../assets/lotties/credit-card.json'
import mpesaAnimationData from '../../../assets/lotties/mpesa.json'
import cashAnimationData from '../../../assets/lotties/cash-payment.json'

const RadioGroup = Radio.Group

class AcceptJobModal extends React.Component {
  state = {
    visible: false,
    confirmLoading: false,
    method: 'Card'
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  updateMethod = e => {
    this.setState({ method: e.target.value})
  }

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  chooseMethod = () => {
    return (
      <RadioGroup name="radiogroup" defaultValue={'Card'} onChange={this.updateMethod}>
        <Radio value={'Card'}>Card</Radio>
        <Radio value={'Mpesa'}>Mpesa</Radio>
        <Radio value={'Cash'}>Cash</Radio>
      </RadioGroup>
    )
  }

  paymentForm = () => {
    const {method} = this.state
    if (method === 'Mpesa'){
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: mpesaAnimationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            PHONE NUMBER
            <Lottie options={defaultOptions}
              height={250}
              width={250}
            />
          </div>
          <div>
            <br/>
            <br/>
            <Input placeholder='Enter Phone Number'/>
          </div>
        </div>
      )
    }
    if (method === 'Card'){
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: cardAnimationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }

      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            CARD DETAILS
            <Lottie options={defaultOptions}
              height={250}
              width={250}
            />
          </div>
          <div>
            <br/><br/>
            <Input />
          </div>
        </div>
      )
    }
    if (method === 'Cash'){
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: cashAnimationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div>
            AMOUNT PAID
            <Lottie options={defaultOptions}
              height={250}
              width={250}
            />
          </div>
          <div>
            <Input placeholder='Enter Amount Paid'/>
          </div>
        </div>
      )
    }
  }

  render() {
    const { service } = this.props
    const title = `Payment Data`
    const { visible, confirmLoading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Request Payment
        </Button>
        <Modal
          title={title}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          okText='Confirm Payment'
          width={700}
        >
         <div>
           Cost 
           <br/>
           <span style={{color : 'orange'}}>Shs 6000.00</span>
         </div>
         <Divider />
         {this.chooseMethod()}
         <Divider />
        {this.paymentForm()}
        </Modal>
      </div>
    );
  }
}

export default AcceptJobModal