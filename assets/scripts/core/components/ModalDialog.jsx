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
        this.state = {
            showModal: false,
            type: '',
            isEdit: false,
            data: null,
            newID: 0
        };
    }

    open(type, isEdit, data) {
        let {newID} = this.state
        if(!data){
            switch(type){
                case 'Project':
                    data = {
                        pid: 'newID' + (newID++),
                        current: 'Switch',
                        name: '',
                        time: 'newTime',
                        users: 0,
                        owner: {
                            picture: '/imgs/app/avatars/avatar0.png',
                            name: 'newName'
                        }
                    }
                    break;
                case 'User':
                    break;
                default:
                    break;
            }
        }
        this.setState({
            showModal: true,
            type: type,
            isEdit: isEdit,
            data: data,
            newID: newID
        });
    }

    close() {
        this.setState({
            showModal: false
        });
    }

    save() {
        let {showModal, type, isEdit, data} = this.state;
        this.props.callbackModal(data);
        this.setState({
            showModal: false
        });
    }

    handleChange(key, e) {
        let newValue = e.target.value;
        let {data} = this.state
        if(!data) data = {};
        console.log(key, newValue, data);
        if(key == 'ownerName'){
            data['owner']['name'] = newValue;
        }else
            data[key] = newValue;
        this.setState({data: data});
    }

    render() {
        let {showModal, type, isEdit, data} = this.state;
        let title = '', description='';
        let formContent = null;
        switch(type){
            case 'Project':
                title = isEdit ? 'Edit Project' : 'New Project';
                description = isEdit ? 'Would you like to rename your project?' : 'What would you like to call your new project?';
                let name = data ? data.name : '';
                let current = data ? data.current : 'Switch';
                let ownerName = data ? data.owner.name : '';
                let formName = <FormGroup controlId="frmName">
                            <Col sm={3} componentClass={ControlLabel}>Project Name</Col>
                            <Col sm={9}>
                                <FormControl autoFocus type='text' value={name} onChange={this.handleChange.bind(this, 'name')}/>
                            </Col>
                        </FormGroup>
                let formCurrent = 
                    <FormGroup controlId="frmCurrent">
                        <Col sm={3} componentClass={ControlLabel}>Current</Col>
                        <Col sm={9}>
                            <FormControl componentClass="select" defaultValue={current} onChange={this.handleChange.bind(this, 'current')}>
                                <option value="Active">Active</option>
                                <option value="Switch">Switch</option>
                            </FormControl>
                        </Col>
                    </FormGroup>
                let formOwnerName = 
                    <FormGroup controlId="formOwnerName">
                        <Col sm={3} componentClass={ControlLabel}>Owner Name</Col>
                        <Col sm={9}>
                            <FormControl type='text' value={ownerName} onChange={this.handleChange.bind(this, 'ownerName')}/>
                        </Col>
                    </FormGroup>
                formContent = 
                    <Form horizontal>
                        {formName}
                        {formCurrent}
                        {formOwnerName}
                    </Form>;                
                break;
            case 'User':
                
                break;
            default:
                break;
        }
        return (
            <Modal show={this.state.showModal} onHide={::this.close}>
                <Modal.Header closeButton>
                    <div className="text-center">
                        <h2 className="modal-title">{title}</h2>
                        <small className="font-bold">{description}</small>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    {formContent}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={::this.close} bsStyle='danger'>Cancel</Button>
                    <Button onClick={::this.save} bsStyle='primary'>{isEdit ? 'Save' : 'Create'}</Button>
                </Modal.Footer>
            </Modal>
        );
  }
}