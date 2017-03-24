import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
// import moment from 'moment-timezone';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {customMultiSelect} from '../../core/components/Checkbox';
import {ModalDialog} from '../../core/components/ModalDialog';
import {
  Row,
  Col,
  Grid,
  Icon,
  Button,
  Label,
  Table,
  Panel,
  PanelBody,
  PanelHeader,
  PanelContainer,
} from '@sketchpixy/rubix';
class DatatableComponent extends React.Component {  
    constructor(props){
        super(props);
        var projects = [
                {
                    pid: '101',
                    current: 'Active',
                    name: 'It\'s A Wonderful Life',
                    time: '01.08.2017 10:04AM',
                    users: 8,
                    owner_picture: '/imgs/app/avatars/avatar0.png',
                    owner_name: 'John Smith1'
                },
                {
                    pid: '102',
                    current: 'Switch',
                    name: '2Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner_picture: '/imgs/app/avatars/avatar1.png',
                    owner_name: 'John Smith2'
                },
                {
                    pid: '103',
                    current: 'Switch',
                    name: '3Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner_picture: '/imgs/app/avatars/avatar2.png',
                    owner_name: 'John Smith3'
                },
                {
                    pid: '4',
                    current: 'Switch',
                    name: '4Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner_picture: '/imgs/app/avatars/avatar3.png',
                    owner_name: 'John Smith4'
                },
                {
                    pid: '5',
                    current: 'Switch',
                    name: '5Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner_picture: '/imgs/app/avatars/avatar4.png',
                    owner_name: 'John Smith5'
                },
                {
                    pid: '6',
                    current: 'Switch',
                    name: '6Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner_picture: '/imgs/app/avatars/avatar5.png',
                    owner_name: 'John Smith6'
                },
                {
                    pid: '7',
                    current: 'Switch',
                    name: '7Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner_picture: '/imgs/app/avatars/avatar6.png',
                    owner_name: 'John Smith7'
                },
                {
                    pid: '1002',
                    current: 'Switch',
                    name: '8Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner_picture: '/imgs/app/avatars/avatar7.png',
                    owner_name: 'John Smith8'
                }
            ];
        this.state = {
            projects: projects,
            modalOpened: false,
            modalEdit: false,
            projectID: null,
        };
    }

    onAfterDeleteRow(rowKeys) {
        var {projects} = this.state;        
        _.map(rowKeys, function(item){            
            _.remove(projects, {pid: item});
        });
        this.setState({projects: projects});
    }

    launchModal(isEdit, pID) {
        var {projects} = this.state;        
        this.setState({modalOpened: true, modalEdit: isEdit, projectID: pID});
        var project = isEdit ? _.find(projects, function(obj) {return obj.pid === pID}) : null;
        this.projectModal.open('Project', isEdit, project);
    }

    callbackModal(data){
        let {modalEdit, projectID, projects} = this.state;
        if(modalEdit){
            // projects[index].name = value;
            // Find item index using indexOf+find
            var index = _.indexOf(projects, _.find(projects, {pid: projectID}));
            // Replace item at index using native splice
            projects.splice(index, 1, data);            
        }else{
            projects.push(data);
        }
        this.setState({projects: projects});
    }
    
    render() {
        let self = this;
        var {projects} = this.state;

        const options = {
            clearSearch: true,
            afterDeleteRow: this.onAfterDeleteRow.bind(this)   // A hook for after insert rows
        };
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: false,
            customComponent: customMultiSelect
        };
        
        var formatter_current = function(current, row){
            return <Label style={{fontSize:11}} className={current=='Active' ? 'bg-darkgreen45 fg-white' : 'bg-darkgray25 fg-black'}>{current}</Label>;
        }
        var formatter_users = function(user){
            return user + ' Users';
        }
        var formatter_owner = function (owner, row) {
            return (
                <div className='owner'>
                    <img className='ownerPicture' src={row.owner_picture}/>
                    <div className='ownerName'>{row.owner_name}</div>
                </div>
            );
        }
        var formatter_edit = function (pid, row){
            return (
                <Button outlined bsStyle='primary' onClick={self.launchModal.bind(self, true, pid)}>
                    <Icon style={{fontSize: 12}} glyph={'icon-fontello-pencil-1'} /> Edit
                </Button>
            );
        }        
        return (
            <div className='page-projects'>
                <div className='controlpanel'>
                    <div className='left'>
                        <h5>All of your projects</h5>
                    </div>
                    <div className='right'>
                        <Button outlined bsStyle='primary' onClick={self.launchModal.bind(self, false, 0)}>
                            <Icon style={{fontSize: 14}} glyph={'icon-flatline-film'} />
                            Create New project
                        </Button>
                    </div>
                </div>
                <ModalDialog ref={(c) => self.projectModal = c} callbackModal={::self.callbackModal}/>
                <BootstrapTable data={projects} striped hover bordered={false} selectRow={ selectRowProp } tableHeaderClass='custom-select-header-class' tableBodyClass='custom-select-body-class' options={ options } search deleteRow pagination>
                    <TableHeaderColumn isKey dataField='pid' hidden>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='current' width='100' dataSort={true} dataAlign='center' dataFormat={formatter_current}>Current</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={true}>Project Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='time' width='180' dataSort={true}>Created</TableHeaderColumn>
                    <TableHeaderColumn dataField='users' width='80' dataSort={true} dataAlign='center' dataFormat={formatter_users}>Users</TableHeaderColumn>
                    <TableHeaderColumn dataField='owner_name' width='250' dataFormat={formatter_owner} dataAlign='center'>Owner</TableHeaderColumn>
                    <TableHeaderColumn dataField='pid' width='100' dataFormat={formatter_edit} dataAlign='center'>Edit</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default class Datatablesjs extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <PanelContainer>
            <Panel>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <DatatableComponent />
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>
        </Col>
      </Row>
    );
  }
}
