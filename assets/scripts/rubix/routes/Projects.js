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
                    owner: {
                        picture: '/imgs/app/avatars/avatar0.png',
                        name: 'John Smith'
                    }
                },
                {
                    pid: '102',
                    current: 'Switch',
                    name: '2Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner: {
                        picture: '/imgs/app/avatars/avatar0.png',
                        name: 'John Smith'
                    }
                },
                {
                    pid: '103',
                    current: 'Switch',
                    name: '3Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner: {
                        picture: '/imgs/app/avatars/avatar0.png',
                        name: 'John Smith'
                    }
                },
                {
                    pid: '4',
                    current: 'Switch',
                    name: '4Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner: {
                        picture: '/imgs/app/avatars/avatar0.png',
                        name: 'John Smith'
                    }
                },
                {
                    pid: '5',
                    current: 'Switch',
                    name: '5Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner: {
                        picture: '/imgs/app/avatars/avatar0.png',
                        name: 'John Smith'
                    }
                },
                {
                    pid: '6',
                    current: 'Switch',
                    name: '6Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner: {
                        picture: '/imgs/app/avatars/avatar0.png',
                        name: 'John Smith'
                    }
                },
                {
                    pid: '7',
                    current: 'Switch',
                    name: '7Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner: {
                        picture: '/imgs/app/avatars/avatar0.png',
                        name: 'John Smith'
                    }
                },
                {
                    pid: '1002',
                    current: 'Switch',
                    name: '8Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner: {
                        picture: '/imgs/app/avatars/avatar0.png',
                        name: 'John Smith'
                    }
                },
                {
                    pid: '3043',
                    current: 'Switch',
                    name: '9Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner: {
                        picture: '/imgs/app/avatars/avatar0.png',
                        name: 'John Smith'
                    }
                },
                {
                    pid: '123402',
                    current: 'Switch',
                    name: '10Casablanca',
                    time: '01.09.2017 09:23AM',
                    users: 3,
                    owner: {
                        picture: '/imgs/app/avatars/avatar0.png',
                        name: 'John Smith'
                    }
                },
                {
                    pid: '8',
                    current: 'Switch',
                    name: '11The Wizard of Oz',
                    time: '01.09.2017 09:23AM',
                    users: 28,
                    owner: {
                        picture: '/imgs/app/avatars/avatar1.png',
                        name: 'Alex Smith'
                    }
                }
            ];
        this.state = {
            projects:projects
        };
    }

    onAfterDeleteRow(rowKeys) {
        var {projects} = this.state;        
        _.map(rowKeys, function(item){            
            _.remove(projects, {pid: item});
        });
        console.log('removed = ', projects);
        this.setState({projects: projects});
    }

    callbackModal(isEdit, index, value){
        if(isEdit){
            var {projects, datatable} = this.state;
            projects[index].name = value;
            this.setState({projects: projects});
        }
    }

    launchModal(isEdit, index) {
        console.log('index = ', index);
        var {projects} = this.state;
        // if(isEdit){
        //     this.projectModal.open(isEdit, index, projects[index].name);
        // }
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
                    <img className='ownerPicture' src={owner.picture}/>
                    <div className='ownerName'>{owner.name}</div>
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
                        <Button outlined bsStyle='primary'>
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
                    <TableHeaderColumn dataField="owner" width='200' dataFormat={formatter_owner} dataAlign='center'>Owner</TableHeaderColumn>
                    <TableHeaderColumn dataField="pid" width='100' dataFormat={formatter_edit} dataAlign='center'>Edit</TableHeaderColumn>
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
