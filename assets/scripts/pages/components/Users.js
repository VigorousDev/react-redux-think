import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
// import moment from 'moment-timezone';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {customMultiSelect, Switch} from '../../core/components/Checkbox';
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
@withRouter
class UsersComponent extends React.Component {  
    constructor(props){
        super(props);        
        this.state = {
            users: this.props.users,
            modalOpened: false,
            modalEdit: false,
            userID: null,
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({users: nextProps.users});
    }

    updateUsers(users){
        this.props.onUsersChange(users);
    }

    selectUser(user){
        this.props.onUserClick(user);
    }

    onSelectOne(row, isSelected, e) {
        var {users} = this.state;
        var index = _.indexOf(users, _.find(users, {uid: row.uid}));
        if(index >= 0){
            users[index].checked = isSelected;
        }else{
            console.log('Not found in array', row);
        }
        this.props.onUsersChange(users);
    }

    onSelectAll(isSelected, rows) {
        var {users} = this.state;
        _.map(rows, function(row){
            var index = _.indexOf(users, _.find(users, {uid: row.uid}));
            if(index >= 0){
                users[index].checked = isSelected;
            }
        });
        this.props.onUsersChange(users);
    }
    
    onDeleteRows(props){
        var {users} = this.state;
        var newArray = users.filter(function(user) {
            return !user.checked;
        });
        this.props.onUsersChange(newArray);
    }

    launchModal(isEdit, pID) {
        var {users} = this.state;        
        this.setState({modalOpened: true, modalEdit: isEdit, userID: pID});
        var project = isEdit ? _.find(users, function(obj) {return obj.uid === pID}) : null;
        this.modalDialog.open('Users', isEdit, project);
    }    

    callbackModal(data){
        let {modalEdit, userID, users} = this.state;
        if(modalEdit){
            // users[index].name = value;
            // Find item index using indexOf+find
            var index = _.indexOf(users, _.find(users, {uid: userID}));
            // Replace item at index using native splice
            users.splice(index, 1, data);
        }else{
            users.push(data);
        }
        this.updateUsers(users);
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

    sendMessage(row){
        if(!row)
            return;
        this.props.router.push('/ltr/mailbox/compose?email=' + row.email + '&name=' + row.name + '&photo=' + row.photo);
    }
    
    render() {
        let self = this;
        var {users} = this.state;

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

        var formatter_name = function (name, row) {
            return (
                <div className='owner'>
                    <img className='ownerPicture' src={row.photo}/>
                    <div className='ownerName' onClick={self.selectUser.bind(self, row)}>{row.name}</div>
                </div>
            );
        }
        var formatter_email = function(email, row){
            return <div className='email'><Icon style={{fontSize: 16}} glyph={'icon-feather-mail'}/>&nbsp;&nbsp;&nbsp;<a href='#'>{email}</a></div>;
        }
        var formatter_phone = function(phone, row){
            return <div className='phone'><Icon style={{fontSize: 16}} glyph={'icon-fontello-call'}/>&nbsp;&nbsp;&nbsp;{phone}</div>;
        }
        var formatter_status = function(status, row){
            return <Label style={{fontSize:11}} className={status=='Online' ? 'bg-darkgreen45 fg-white' : 'bg-darkgray25 fg-black'}>{status}</Label>;
        }
        var formatter_messaging = function(uid, row){
            return (
                <Button bsStyle='green' onClick={self.sendMessage.bind(self, row)} block>
                    <Icon style={{fontSize: 14}} glyph={'icon-feather-mail'} />&nbsp;&nbsp;Send Message
                </Button>
            );
        }
        return (
            <div className='page-users'>
                <div className='controlpanel'>
                    <div className='left'>
                        <h4>All users in the project</h4>
                    </div>
                    <div className='right'>
                        <Button outlined bsStyle='primary' onClick={self.launchModal.bind(self, false, 0)}>
                            <Icon style={{fontSize: 14}} glyph={'icon-feather-mail'} />
                            Invite More Users
                        </Button>
                    </div>
                </div>
                <ModalDialog ref={(c) => self.modalDialog = c} callbackModal={::self.callbackModal}/>
                <BootstrapTable data={users} striped hover bordered={false} selectRow={ selectRowProp } tableHeaderClass='custom-select-header-class' tableBodyClass='custom-select-body-class' options={ options } search deleteRow pagination>
                    <TableHeaderColumn isKey dataField='uid' hidden>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='status' width='100' dataSort={true} dataAlign='center' dataFormat={formatter_status}>Status</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' width='250' dataSort={true} dataFormat={formatter_name}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='messaging' dataSort={false} dataAlign='center' dataFormat={formatter_messaging}>Messaging</TableHeaderColumn>
                </BootstrapTable>
                <div className='space-for-pagination'/>
            </div>
        );
    }
}
@withRouter
class UserComponent extends React.Component {  
    constructor(props){
        super(props);        
        this.state = {
            user: this.props.user
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({user: nextProps.user});
    }

    onScheduleChanged(obj, e){
        var {user} = this.state;
        user[e.target.id] = e.target.checked;
        if(e.target.id == 'schedule_view' && e.target.checked == false){
            user['schedule_edit'] = false;
        }
        this.props.onScheduleChanged(user);        
    }

    sendMessage(e){
        e.preventDefault();
        e.stopPropagation();

        var {user} = this.state;
        this.props.router.push('/ltr/mailbox/compose?email=' + user.email + '&name=' + user.name + '&photo=' + user.photo);
    }
    
    render() {
        let self = this;
        var {user} = this.state;        
        return (
            <div className='page-user'>
                {!!user &&
                    <div>
                        <div className='text-center'>
                            <h2>{user.name}</h2>
                            <div><img className='ownerPicture' src={user.photo}/></div>
                        </div>
                        <div>
                            <strong>About</strong>
                            <div>
                                {user.about}
                            </div>
                            <div className='text-center'>
                                <Button bsStyle='green' onClick={::this.sendMessage} block>
                                    <Icon style={{fontSize: 14}} glyph={'icon-feather-mail'} />&nbsp;&nbsp;Send Message
                                </Button>
                            </div>
                            <br/>
                        </div>
                        <div>
                            <strong>Permissions</strong>
                            <hr/>
                            <h4>
                                <Icon style={{fontSize: 24}} glyph={'icon-feather-align-justify'}/> Schedule
                            </h4>
                            <div>
                                <Row>
                                    <Col xs={6}>
                                        <Switch id={'schedule_view'} checked={user.schedule_view} onChange={self.onScheduleChanged.bind(self, this)} title={'View'}/>
                                    </Col>
                                    <Col xs={6}>
                                        <Switch id={'schedule_edit'} checked={user.schedule_edit} onChange={self.onScheduleChanged.bind(self, this)} title={'Edit'}/>
                                    </Col> 
                                </Row>
                            </div>
                            <div className='text-center'>
                                <Button bsStyle='danger' block outlined>
                                    <Icon style={{fontSize: 14}} glyph={'icon-fontello-warning-empty'} />&nbsp;&nbsp;Remove From Schedule
                                </Button>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            <strong>Also a member of</strong>
                            <div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                }
            </div>
        );
    }
}

export default class Users extends React.Component {
    constructor(props){
        super(props);
        var users = [
            {
                uid: '101',
                status: 'Online',
                name: 'Anthony Jackson',
                email: 'gravida@rbisit.com',
                phone: '(323) 555-1211',
                photo: '/imgs/app/avatars/avatar0.png',
                about: 'User101 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                schedule_view: true,
                schedule_edit: false,
                checked: false
            },
            {
                uid: '102',
                status: 'Offline',
                name: 'Rooney Lindsay',
                email: 'rooney@proin.com',
                phone: '(323) 555-1212',
                photo: '/imgs/app/avatars/avatar1.png',
                about: 'User102 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                schedule_view: true,
                schedule_edit: false,
                checked: false
            },
            {
                uid: '103',
                status: 'Offline',
                name: 'Lionel Mcmillan',
                email: 'pacheco@manga.com',
                phone: '(323) 555-1213',
                photo: '/imgs/app/avatars/avatar2.png',
                about: 'User103 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                schedule_view: true,
                schedule_edit: false,
                checked: false
            },
            {
                uid: '104',
                status: 'Offline',
                name: 'Edan Randall',
                email: 'rooney@proin.com',
                phone: '(323) 555-1214',
                photo: '/imgs/app/avatars/avatar3.png',
                about: 'User104 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                schedule_view: true,
                schedule_edit: false,
                checked: false
            }
        ];
        this.state = {
            users: users,
            user: users[0]
        };
    }

    updateUsers(users){
        this.setState({users: users});
    }

    selectUser(user){
        this.setState({user: user});
    }

    scheduleChanged(user){
        this.setState({user: user});
    }

    render() {
        let {users, user} = this.state
        return (
            <Grid>
            <Row>
                <Col sm={8}>
                    <PanelContainer controls={false}>
                        <Panel>
                            <PanelBody>
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <UsersComponent users={users} onUsersChange={::this.updateUsers} onUserClick={::this.selectUser}/>
                                        </Col>
                                    </Row>
                                </Grid>
                            </PanelBody>
                        </Panel>
                    </PanelContainer>
                </Col>
                <Col sm={4}>
                    <PanelContainer controls={false}>
                        <Panel>
                            <PanelBody>
                                <Grid>
                                    <Row>
                                        <Col xs={12}>
                                            <UserComponent user={user} onScheduleChanged={::this.scheduleChanged}/>
                                        </Col>                    
                                    </Row>
                                </Grid>
                            </PanelBody>
                        </Panel>
                    </PanelContainer>
                </Col>
            </Row>
            </Grid>
        );
    }
}
