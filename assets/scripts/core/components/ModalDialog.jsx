import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Row,
  Col,
  Button,
  Modal,
  Label,
  Form,
  FormGroup,
  FormControl,
  ControlLabel
} from '@sketchpixy/rubix';
export class ModalDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false, isEdit: false, projectpid: 0, projectName:''};
  }

  save() {
    this.props.callbackModal( this.state.isEdit, this.state.projectId, this.state.projectName );
    this.setState({ showModal: false }); 
  }

  close() {
    this.setState({ showModal: false });    
  }

  open(isEdit, index, name) {
    this.setState({showModal: true, isEdit: isEdit, projectpid: index, projectName: name });
  }

  handleChange(e){
      this.setState({projectName: e.target.value});
  }

  render() {
    var that = this
    var projectName = this.state.projectName
    var title = this.state.isEdit ? 'Edit Project' : 'New Project';
    var description = this.state.isEdit ? 'Would you like to rename your project?' : 'What would you like to call your new project?';
    return (
        <Modal show={this.state.showModal} onHide={::this.close}>
            <Modal.Header closeButton>
                <div className="text-center">
                    <h2 className="modal-title">{title}</h2>
                    <small className="font-bold">{description}</small>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Form horizontal>
                    <FormGroup controlId='blockhelp'>
                        <Col sm={3} componentClass={ControlLabel}>Project Name</Col>
                        <Col sm={9}>
                            <FormControl autoFocus type='text' placeholder={projectName} value={projectName} onChange={::this.handleChange}/>
                        </Col>
                    </FormGroup>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={::this.close} bsStyle='danger'>Cancel</Button>
                <Button onClick={::this.save} bsStyle='primary'>{this.state.isEdit ? 'Save' : 'Create'}</Button>
            </Modal.Footer>
        </Modal>
    );
  }
}