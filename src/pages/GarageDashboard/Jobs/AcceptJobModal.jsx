import React from 'react'
import { Modal, Button, Input, Form, Radio, Divider } from 'antd'

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
      return (
        <div>
          CUSTOMER NUMBER
          <br/>
          <br/>
          <Input/>
        </div>
      )
    }
    if (method === 'Card'){
      return (
        <div>
          CARD DETAILS
          <br/><br/>
          <Input />
        </div>
      )
    }
    if (method === 'Cash'){
      return (
        <div>
          AMOUNT PAID
          <br/><br/>
          <Input />
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
           Shs 6000.00
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