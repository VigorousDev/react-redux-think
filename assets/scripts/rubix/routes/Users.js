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
                current: 'Online',
                name: 'Anthony Jackson',
                email: 'gravida@rbisit.com',
                phone: '(323) 555-1212',
                photo: '/imgs/app/avatars/avatar0.png'
            },
            {
                uid: '102',
                current: 'Offline',
                name: 'Rooney Lindsay',
                email: 'rooney@proin.com',
                phone: '(323) 555-1212',
                photo: '/imgs/app/avatars/avatar1.png'
            },
            {
                uid: '103',
                current: 'Offline',
                name: 'Lionel Mcmillan',
                email: 'pacheco@manga.com',
                phone: '(323) 555-1212',
                photo: '/imgs/app/avatars/avatar1.png'
            },
            {
                uid: '104',
                current: 'Offline',
                name: 'Edan Randall',
                email: 'rooney@proin.com',
                phone: '(323) 555-1212',
                photo: '/imgs/app/avatars/avatar1.png'
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
        var formatter_edit = function (uid, row){
            return (
                <Button outlined bsStyle='primary' onClick={self.launchModal.bind(self, true, uid)}>
                    <Icon style={{fontSize: 12}} glyph={'icon-fontello-pencil-1'} /> Edit
                </Button>
            );
        }        
        return (
            <div className='page-users'>
                <div className='controlpanel'>
                    <div className='left'>
                        <h5>All users in the project</h5>
                    </div>
                    <div className='right'>
                        <Button outlined bsStyle='primary' onClick={self.launchModal.bind(self, false, 0)}>
                            <Icon style={{fontSize: 14}} glyph={'icon-flatline-film'} />
                            Invite More Users
                        </Button>
                    </div>
                </div>
                <ModalDialog ref={(c) => self.modalDialog = c} callbackModal={::self.callbackModal}/>
                <BootstrapTable data={users} striped hover bordered={false} selectRow={ selectRowProp } tableHeaderClass='custom-select-header-class' tableBodyClass='custom-select-body-class' options={ options } search deleteRow>
                    <TableHeaderColumn isKey dataField='uid' hidden>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='current' width='100' dataSort={true} dataAlign='center' dataFormat={formatter_current}>Current</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={true}>Project Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='time' width='180' dataSort={true}>Created</TableHeaderColumn>
                    <TableHeaderColumn dataField='users' width='80' dataSort={true} dataAlign='center' dataFormat={formatter_users}>Users</TableHeaderColumn>
                    <TableHeaderColumn dataField='owner_name' width='250' dataFormat={formatter_owner} dataAlign='center'>Owner</TableHeaderColumn>
                    <TableHeaderColumn dataField='uid' width='100' dataFormat={formatter_edit} dataAlign='center'>Edit</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default class Users extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
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
      </Row>
    );
  }
}
