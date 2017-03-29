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
class SchedulesComponent extends React.Component {  
    constructor(props){
        super(props);
        var schedules = [
                {
                    sid: '101',
                    name: 'Locked White',
                    shoot_days: 31,
                    created_time: '01.08.2017 10:04AM',
                    owner_name: 'John Smith'
                },
                {
                    sid: '102',
                    name: 'Prelim Blue Draft',
                    shoot_days: 30,
                    created_time: '01.09.2017 10:04AM',
                    owner_name: 'John Smith'
                },
                {
                    sid: '103',
                    name: 'Locked Blue',
                    shoot_days: 28,
                    created_time: '01.12.2017 10:04AM',
                    owner_name: 'John Smith1'
                }
            ];
        this.state = {
            schedules: schedules,
            modalOpened: false,
            modalEdit: false,
            scheduleID: null,
        };
    }

    onAfterDeleteRow(rowKeys) {
        var {schedules} = this.state;        
        _.map(rowKeys, function(item){            
            _.remove(schedules, {sid: item});
        });
        this.setState({schedules: schedules});
    }

    launchModal(isEdit, sid) {
        var {schedules} = this.state;
        this.setState({modalOpened: true, modalEdit: isEdit, scheduleID: sid});
        var schedule = isEdit ? _.find(schedules, function(obj) {return obj.sid === sid}) : null;
        this.modalDialog.open('Schedules', isEdit, schedule);
    }

    callbackModal(data){
        let {modalEdit, scheduleID, schedules} = this.state;
        if(modalEdit){
            // schedules[index].name = value;
            // Find item index using indexOf+find
            var index = _.indexOf(schedules, _.find(schedules, {sid: scheduleID}));
            // Replace item at index using native splice
            schedules.splice(index, 1, data);            
        }else{
            schedules.push(data);
        }
        this.setState({schedules: schedules});
    }

    openSchedule(row){
        if(!row)
            return;
        // this.props.router.push('/ltr/mailbox/compose?email=' + row.email + '&name=' + row.name + '&photo=' + row.photo);
    }
    
    render() {
        let self = this;
        var {schedules} = this.state;

        const options = {
            clearSearch: true,
            afterDeleteRow: this.onAfterDeleteRow.bind(this)   // A hook for after insert rows
        };
        const selectRowProp = {
            mode: 'checkbox',
            clickToSelect: false,
            customComponent: customMultiSelect
        };        
        
        var formatter_shoot_days = function(shoot_days){
            return shoot_days + ' Days';
        }
        var formatter_owner = function (owner, row) {
            return (
                <div className='owner'>
                    <div className='ownerName'>{owner}</div>
                </div>
            );
        }
        var formatter_open = function(sid, row){
            return (
                <Button bsStyle='green' onClick={self.openSchedule.bind(self, row)} block>
                    Open Schedule
                </Button>
            );
        }
        var formatter_edit = function (sid, row){
            return (
                <Button outlined bsStyle='primary' onClick={self.launchModal.bind(self, true, sid)}>
                    <Icon style={{fontSize: 12}} glyph={'icon-fontello-pencil-1'} /> Edit
                </Button>
            );
        }        
        return (
            <div className='page-schedules'>
                <div className='controlpanel'>
                    <div className='left'>
                        <h4>Schedules for </h4>
                    </div>
                    <div className='right'>
                        <Button outlined bsStyle='primary' onClick={self.launchModal.bind(self, false, 0)}>
                            <Icon style={{fontSize: 14}} glyph={'icon-feather-align-justify'} />
                            Create New Schedule
                        </Button>
                    </div>
                </div>
                <ModalDialog ref={(c) => self.modalDialog = c} callbackModal={::self.callbackModal}/>
                <BootstrapTable data={schedules} striped hover bordered={false} selectRow={ selectRowProp } tableHeaderClass='custom-select-header-class' tableBodyClass='custom-select-body-class' options={ options } search deleteRow pagination>
                    <TableHeaderColumn isKey dataField='sid' hidden>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={true}>Schedule Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='shoot_days' width='100' dataSort={true} dataFormat={formatter_shoot_days}>Shoot Days</TableHeaderColumn>
                    <TableHeaderColumn dataField='owner_name' width='120' dataFormat={formatter_owner}>Owner</TableHeaderColumn>
                    <TableHeaderColumn dataField='created_time' width='180' dataSort={true}>Created</TableHeaderColumn>
                    <TableHeaderColumn dataField='sid' width='180' dataSort={false} dataFormat={formatter_open}>Open</TableHeaderColumn>
                    <TableHeaderColumn dataField='sid' width='100' dataSort={false} dataFormat={formatter_edit} dataAlign='center'>Edit</TableHeaderColumn>                    
                </BootstrapTable>
                <div className='space-for-pagination'/>
            </div>
        );
    }
}

export default class Schedules extends React.Component {
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
                                        <SchedulesComponent />
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
