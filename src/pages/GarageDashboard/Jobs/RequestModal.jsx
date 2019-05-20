import React from 'react'
import { Modal, Button, Form, Input } from 'antd';

class RequestModal extends React.Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  responseForm = () => {
    return (
      <Form style={{ marginTop: '2rem'}}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>LABOUR COST</div>
            <Input />
        </div>
        <br/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>PARTS COST</div>
            <Input />
        </div>
        <br/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>DIAGNOSTIC FEE (IF APPLICABLE)</div>
            <Input />
        </div>
        <br/>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <div>TOTAL COST</div>
            <Input />
        </div>
      </Form>
    )
  }

  renderServiceDetails = service => {
    const { category, type, notes } =  service
    return (
      <div className="service-det" style={{ backgroundColor: '#d5d7d6', padding: '2rem'}}>
        <h2>SERVICE DESCRIPTION</h2>
        <div className="details">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr'}}>
            <div>CATEGORY</div>
            <div>{category}</div>
          </div>
          <br/>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr'}}>
            <div>SERVICE TYPE</div>
            <div>{type}</div>
          </div>
          <br/>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr'}}>
            <div>NOTES</div>
            <div>{notes}</div>
          </div>
        </div>
      </div>
    )
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

  render() {
    const { service } = this.props
    const title = `RESPOND TO ${service.name}`
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Accept
        </Button>
        <Modal
          title={title}
          visible={visible}
          onOk={this.handleOk}
          okText='Respond'
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          width={960}
        >
          {this.renderServiceDetails(service)}
          {this.responseForm()}
        </Modal>
      </div>
    );
  }
}

export default RequestModal