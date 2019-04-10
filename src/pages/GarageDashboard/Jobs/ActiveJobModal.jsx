import React from 'react'
import { Modal, Button } from 'antd';

class ActiveModal extends React.Component {
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

  renderServiceDetails = service => {
    return (
      <div className="service-det">
        <h2>SERVICE DESCRIPTION</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
          <div className='titles' style={{ display: 'grid', gridTemplateColumns: 'auto'}}>
            <div>CATEGORY</div>
            <br/>
            <div>SERVICE TYPE</div>
            <br/>
            <div>NOTES</div>
          </div>
          <div classNam='details' style={{ display: 'grid', gridTemplateColumns: 'auto'}}>
            <div>{service.category}</div>
            <br/>
            <div>{service.type}</div>
            <br/>
            <div>{service.notes}</div>
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
          Add Service
        </Button>
        <Modal
          title={title}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          {this.renderServiceDetails(service)}
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}

export default ActiveModal