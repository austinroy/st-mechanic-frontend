import React from 'react'
import { Modal, Button, Input, Form, DatePicker, Select } from 'antd';

class BookingModal extends React.Component {
  state = {
    visible: false,
    confirmLoading: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      ModalText: 'Submitting Quote',
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

  scheduleForm = () => {
    return (
      <Form style={{ marginTop: '2rem'}}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>ASSIGN MECHANIC</div>
            <Input />
        </div>
        <br/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>UPDATE DATE & TIME</div>
            <DatePicker showTime format="YYYY-MM-DD HH:mm"/>
        </div>
        <br/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>STATUS</div>
            <Select />
        </div>
        <br/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>TOTAL COST</div>
            <Input />
        </div>
      </Form>
    )
  }

  render() {
    const { service } = this.props
    const title = `SCHEDULE ${service.name}`
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Schedule
        </Button>
        <Modal
          title={title}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          okText='Schedule'
          width={700}
        >
        {this.scheduleForm()}
        </Modal>
      </div>
    );
  }
}

export default BookingModal