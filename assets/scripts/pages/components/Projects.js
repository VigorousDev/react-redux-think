import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
// import moment from 'moment-created_timezone';
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
import { withRouter } from 'react-router';
class ProjectsComponent extends React.Component {  
    constructor(props){
        super(props);
        var projects = [
                {
                    pid: '101',
                    current: 'Active',
                    name: 'It\'s A Wonderful Life',
                    created_time: '01.08.2017 10:04AM',
                    users: 8,
                    owner_picture: '/imgs/app/avatars/avatar0.png',
                    owner_name: 'John Smith1',
                    checked: false
                },
                {
                    pid: '102',
                    current: 'Switch',
                    name: '2Casablanca',
                    created_time: '01.09.2017 09:23AM',
                    users: 3,
                    owner_picture: '/imgs/app/avatars/avatar1.png',
                    owner_name: 'John Smith2',
                    checked: false
                },
                {
                    pid: '103',
                    current: 'Switch',
                    name: '3Casablanca',
                    created_time: '01.09.2017 09:23AM',
                    users: 3,
                    owner_picture: '/imgs/app/avatars/avatar2.png',
                    owner_name: 'John Smith3',
                    checked: false
                },
                {
                    pid: '4',
                    current: 'Switch',
                    name: '4Casablanca',
                    created_time: '01.09.2017 09:23AM',
                    users: 3,
                    owner_picture: '/imgs/app/avatars/avatar3.png',
                    owner_name: 'John Smith4',
                    checked: false
                },
                {
                    pid: '5',
                    current: 'Switch',
                    name: '5Casablanca',
                    created_time: '01.09.2017 09:23AM',
                    users: 3,
                    owner_picture: '/imgs/app/avatars/avatar4.png',
                    owner_name: 'John Smith5',
                    checked: false
                },
                {
                    pid: '6',
                    current: 'Switch',
                    name: '6Casablanca',
                    created_time: '01.09.2017 09:23AM',
                    users: 3,
                    owner_picture: '/imgs/app/avatars/avatar5.png',
                    owner_name: 'John Smith6',
                    checked: false
                },
                {
                    pid: '7',
                    current: 'Switch',
                    name: '7Casablanca',
                    created_time: '01.09.2017 09:23AM',
                    users: 3,
                    owner_picture: '/imgs/app/avatars/avatar6.png',
                    owner_name: 'John Smith7',
                    checked: false
                },
                {
                    pid: '1002',
                    current: 'Switch',
                    name: '8Casablanca',
                    created_time: '01.09.2017 09:23AM',
                    users: 3,
                    owner_picture: '/imgs/app/avatars/avatar7.png',
                    owner_name: 'John Smith8',
                    checked: false
                }
            ];
        this.state = {
            projects: projects,
            modalOpened: false,
            modalEdit: false,
            projectID: null,
        };
    }

    onSelectOne(row, isSelected, e) {
        var {projects} = this.state;
        var index = _.indexOf(projects, _.find(projects, {pid: row.pid}));
        if(index >= 0){
            projects[index].checked = isSelected;
            this.setState({projects: projects});
        }else{
            console.log('Not found in array', row);
        }
    }

    onSelectAll(isSelected, rows) {
        var {projects} = this.state;
        _.map(rows, function(row){
            var index = _.indexOf(projects, _.find(projects, {pid: row.pid}));
            if(index >= 0){
                projects[index].checked = isSelected;
            }
        });
        this.setState({projects: projects});
    }

    onDeleteRows(props){
        var {projects} = this.state;
        var newArray = projects.filter(function(project) {
            return !project.checked;
        });
        this.setState({projects: newArray});
    }

    launchModal(isEdit, pID) {
        var {projects} = this.state;
        this.setState({modalOpened: true, modalEdit: isEdit, projectID: pID});
        var project = isEdit ? _.find(projects, function(obj) {return obj.pid === pID}) : null;
        this.modalDialog.open('Projects', isEdit, project);
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

    createCustomButtonGroup(props){
        return (
            <ButtonGroup className='datatable-btn-panel' sizeClass='btn-group-sm'>
                <Button bsStyle='primary' onClick={this.onDeleteRows.bind(this)}>
                    <Icon style={{fontSize: 14}} glyph={'icon-fontello-trash-1'} />&nbsp;Delete
                </Button>
            </ButtonGroup>
        );
    }  
    
    render() {
        let self = this;
        var {projects} = this.state;

        const options = {
            clearSearch: true,
            btnGroup: this.createCustomButtonGroup.bind(this)
        };
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: false,
            customComponent: customMultiSelect,
            onSelect: this.onSelectOne.bind(this),
            onSelectAll: this.onSelectAll.bind(this)
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
                        <h4>All of your projects</h4>
                    </div>
                    <div className='right'>
                        <Button outlined bsStyle='primary' onClick={self.launchModal.bind(self, false, 0)}>
                            <Icon style={{fontSize: 14}} glyph={'icon-flatline-film'} />
                            Create New Project
                        </Button>
                    </div>
                </div>
                <ModalDialog ref={(c) => self.modalDialog = c} callbackModal={::self.callbackModal}/>
                <BootstrapTable data={projects} striped hover bordered={false} selectRow={ selectRowProp } tableHeaderClass='custom-select-header-class' tableBodyClass='custom-select-body-class' options={ options } search deleteRow pagination>
                    <TableHeaderColumn isKey dataField='pid' hidden>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='current' width='100' dataSort={true} dataAlign='center' dataFormat={formatter_current}>Current</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={true}>Project Name</TableHeaderColumn>
                    <TableHeaderColumn columnClassName="hidden-xs" className="hidden-xs" dataField='created_time' width='180' dataSort={true}>Created</TableHeaderColumn>
                    <TableHeaderColumn columnClassName="hidden-xs" className="hidden-xs" dataField='users' width='80' dataSort={true} dataAlign='center' dataFormat={formatter_users}>Users</TableHeaderColumn>
                    <TableHeaderColumn columnClassName="hidden-xs" className="hidden-xs" dataField='owner_name' width='250' dataFormat={formatter_owner} dataAlign='center'>Owner</TableHeaderColumn>
                    <TableHeaderColumn dataField='pid' width='100' dataFormat={formatter_edit} dataAlign='center'>Edit</TableHeaderColumn>
                </BootstrapTable>
                <div className='space-for-pagination'/>
            </div>
        );
    }
}
@withRouter
export default class Projects extends React.Component {
  render() {
    return (
        <Grid>
            <PanelContainer controls={false}>
                <Panel>
                    <PanelBody>
                        <Grid>                            
                            <ProjectsComponent />
                        </Grid>
                    </PanelBody>
                </Panel>
            </PanelContainer>
        </Grid>
    );
  }
}
