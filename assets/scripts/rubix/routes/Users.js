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
class UsersComponent extends React.Component {  
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
                about: 'User101 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                uid: '102',
                status: 'Offline',
                name: 'Rooney Lindsay',
                email: 'rooney@proin.com',
                phone: '(323) 555-1212',
                photo: '/imgs/app/avatars/avatar1.png',
                about: 'User102 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                uid: '103',
                status: 'Offline',
                name: 'Lionel Mcmillan',
                email: 'pacheco@manga.com',
                phone: '(323) 555-1213',
                photo: '/imgs/app/avatars/avatar2.png',
                about: 'User103 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            },
            {
                uid: '104',
                status: 'Offline',
                name: 'Edan Randall',
                email: 'rooney@proin.com',
                phone: '(323) 555-1214',
                photo: '/imgs/app/avatars/avatar3.png',
                about: 'User104 - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
        ];
        this.state = {
            users: users,
            modalOpened: false,
            modalEdit: false,
            userID: null,
        };
    }

    onAfterDeleteRow(rowKeys) {
        var {users} = this.state;        
        _.map(rowKeys, function(item){            
            _.remove(users, {uid: item});
        });
        this.setState({users: users});
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
        this.setState({users: users});
    }
    
    render() {
        let self = this;
        var {users} = this.state;

        const options = {
            clearSearch: true,
            afterDeleteRow: this.onAfterDeleteRow.bind(this)   // A hook for after insert rows
        };
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: false,
            customComponent: customMultiSelect
        };

        var formatter_name = function (name, row) {
            return (
                <div className='owner'>
                    <img className='ownerPicture' src={row.photo}/>
                    <div className='ownerName'>{row.name}</div>
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
        return (
            <div className='page-users'>
                <div className='controlpanel'>
                    <div className='left'>
                        <h5>All users in the project</h5>
                    </div>
                    <div className='right'>
                        <Button outlined bsStyle='primary' onClick={self.launchModal.bind(self, false, 0)}>
                            <Icon style={{fontSize: 14}} glyph={'icon-feather-mail'} />
                            Invite More Users
                        </Button>
                    </div>
                </div>
                <ModalDialog ref={(c) => self.modalDialog = c} callbackModal={::self.callbackModal}/>
                <BootstrapTable data={users} striped hover bordered={false} selectRow={ selectRowProp } tableHeaderClass='custom-select-header-class' tableBodyClass='custom-select-body-class' options={ options } search deleteRow>
                    <TableHeaderColumn isKey dataField='uid' hidden>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' width='250' dataSort={true} dataFormat={formatter_name}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='email' width='180' dataSort={true} dataFormat={formatter_email}>Email</TableHeaderColumn>
                    <TableHeaderColumn dataField='phone' width='180' dataSort={true} dataFormat={formatter_phone}>Phone</TableHeaderColumn>
                    <TableHeaderColumn dataField='status' width='100' dataSort={true} dataAlign='center' dataFormat={formatter_status}>Status</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default class Users extends React.Component {
  render() {
    return (
      <Row>
        <Col sm={8}>
          <PanelContainer controls={false}>
            <Panel>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <UsersComponent />
                      <br/><br/><br/>
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
                        <Col xs={12} style={{height: 500}}>

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
