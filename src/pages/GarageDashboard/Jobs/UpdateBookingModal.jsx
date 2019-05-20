import React from 'react'
import { Modal, Button, Input, Form, DatePicker, Select } from 'antd';

class UpdateBookingModal extends React.Component {
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

  updateForm = () => {
    return (
      <Form style={{ marginTop: '2rem'}}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>CATEGORY</div>
            <Select />
        </div>
        <br/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>SERVICE SOUGHT</div>
            <Input />
        </div>
        <br/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>PARTS COST</div>
            <Select />
        </div>
        <br/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>PARTS COST</div>
            <Input />
        </div>
        <br/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>LABOUR COST</div>
            <Input />
        </div>
        <br/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>MECHANIC</div>
            <Input />
        </div>
        <br/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>MANAGER</div>
            <Input />
        </div>
        <br/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>NOTES</div>
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
        <Button onClick={this.showModal}>
          Add Service
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
        {this.updateForm()}
        </Modal>
      </div>
    );
  }
}

export default UpdateBookingModal