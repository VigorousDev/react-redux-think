import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import {
  Row,
  Col,
  Grid,
  Icon,
  Button,
  Modal,  
  Label,
  Panel,
  Table,
  PanelBody,
  PanelHeader,
  Form,
  FormGroup,
  FormControl,
  HelpBlock,
  ControlLabel,
  PanelContainer,
} from '@sketchpixy/rubix';

class ProjectModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showModal: false, isEdit: false, projectId: 0, projectName:''};
  }

  save(){
    this.props.callbackModal( this.state.isEdit, this.state.projectId, this.state.projectName );
    this.setState({ showModal: false }); 
  }

  close() {
    this.setState({ showModal: false });    
  }

  open(isEdit, index, name) {
    this.setState({showModal: true, isEdit: isEdit, projectId: index, projectName: name });
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

class DatatableComponent extends React.Component {  
    constructor(props){
        super(props);
        var projects = [
                {
                    'id': '101',
                    'current': 'Active',
                    'name': 'It\'s A Wonderful Life',
                    'time': 'Created 01.08.2017 10:04AM',
                    'users': 8,
                    'owner': {
                        'picture': '/imgs/app/avatars/avatar0.png',
                        'name': 'John Smith'
                    }
                },
                {
                    'id': '102',
                    'current': 'Switch',
                    'name': '2Casablanca',
                    'time': 'Created 01.09.2017 09:23AM',
                    'users': 3,
                    'owner': {
                        'picture': '/imgs/app/avatars/avatar0.png',
                        'name': 'John Smith'
                    }
                },
                {
                    'id': '103',
                    'current': 'Switch',
                    'name': '3Casablanca',
                    'time': 'Created 01.09.2017 09:23AM',
                    'users': 3,
                    'owner': {
                        'picture': '/imgs/app/avatars/avatar0.png',
                        'name': 'John Smith'
                    }
                },
                {
                    'id': '4',
                    'current': 'Switch',
                    'name': '4Casablanca',
                    'time': 'Created 01.09.2017 09:23AM',
                    'users': 3,
                    'owner': {
                        'picture': '/imgs/app/avatars/avatar0.png',
                        'name': 'John Smith'
                    }
                },
                {
                    'id': '5',
                    'current': 'Switch',
                    'name': '5Casablanca',
                    'time': 'Created 01.09.2017 09:23AM',
                    'users': 3,
                    'owner': {
                        'picture': '/imgs/app/avatars/avatar0.png',
                        'name': 'John Smith'
                    }
                },
                {
                    'id': '6',
                    'current': 'Switch',
                    'name': '6Casablanca',
                    'time': 'Created 01.09.2017 09:23AM',
                    'users': 3,
                    'owner': {
                        'picture': '/imgs/app/avatars/avatar0.png',
                        'name': 'John Smith'
                    }
                },
                {
                    'id': '7',
                    'current': 'Switch',
                    'name': '7Casablanca',
                    'time': 'Created 01.09.2017 09:23AM',
                    'users': 3,
                    'owner': {
                        'picture': '/imgs/app/avatars/avatar0.png',
                        'name': 'John Smith'
                    }
                },
                {
                    'id': '1002',
                    'current': 'Switch',
                    'name': '8Casablanca',
                    'time': 'Created 01.09.2017 09:23AM',
                    'users': 3,
                    'owner': {
                        'picture': '/imgs/app/avatars/avatar0.png',
                        'name': 'John Smith'
                    }
                },
                {
                    'id': '3043',
                    'current': 'Switch',
                    'name': '9Casablanca',
                    'time': 'Created 01.09.2017 09:23AM',
                    'users': 3,
                    'owner': {
                        'picture': '/imgs/app/avatars/avatar0.png',
                        'name': 'John Smith'
                    }
                },
                {
                    'id': '123402',
                    'current': 'Switch',
                    'name': '10Casablanca',
                    'time': 'Created 01.09.2017 09:23AM',
                    'users': 3,
                    'owner': {
                        'picture': '/imgs/app/avatars/avatar0.png',
                        'name': 'John Smith'
                    }
                },
                {
                    'id': '8',
                    'current': 'Switch',
                    'name': '11The Wizard of Oz',
                    'time': 'Created 01.09.2017 09:23AM',
                    'users': 28,
                    'owner': {
                        'picture': '/imgs/app/avatars/avatar1.png',
                        'name': 'Alex Smith'
                    }
                }
            ];
        this.state = {
            projects:projects,
            datatable: null
        };
    }
    componentDidMount() {
        this.initializeDatatable();
    }
    componentWillUnmount(){
        var {projects, datatable} = this.state;
        datatable.destroy(true);
        console.log('unmount');
    }

    componentDidUpdate(){
        console.log('called');
        var {projects, datatable} = this.state;
        // this.initializeDatatable();
        // datatable.rows('.selected').remove().draw( false );
        console.log('start');
        _.map(datatable.rows().data(), function(item){
            console.log('rows = ', item[0]);
        })
        console.log('end');
        datatable.rows().invalidate().draw();
    }

    removeProjects(){
        var {projects, datatable} = this.state;        
        _.map(datatable.rows('.selected').data(), function(item){            
            _.remove(projects, {id: item[0]});
        });
        // datatable.rows('.selected').remove().draw( false );
        console.log('removed = ', projects);
        this.setState({projects: projects});
    }

    initializeDatatable(){
        var rows_selected = [];
        var counter = 1;
        var table = $(ReactDOM.findDOMNode(this.example))        
        .DataTable({
            'columnDefs': [
                {
                    'targets': 0,
                    'visible': false,
                    'orderable': false,
                    'searchable': false
                },
                {
                    'targets': 1,
                    'searchable': false,
                    'orderable': false,
                    'width': '1%',
                    'className': 'dt-body-center',
                    'render': function (data, type, full, meta){
                        // console.log('render = ', data, type, full, meta);
                        return '<input type="checkbox">';
                    }
                },
                {
                    'targets':2,
                    'className': 'dt-body-center',
                    'width': '40px',
                    'searchable': false
                },
                {
                    'targets': 4,
                    'className': 'dt-body-center',
                    'searchable': false,
                    'orderable': false
                },
                {
                    'targets': 6,
                    'searchable': false,
                    'orderable': false
                }
            ],
            'order': [[2, 'asc']],
            'rowCallback': function(row, data, dataIndex){
                // Get row ID
                // var rowId = data[0];

                // // If row ID is in the list of selected row IDs
                // if($.inArray(rowId, rows_selected) !== -1){
                //     $(row).find('input[type="checkbox"]').prop('checked', true);
                //     $(row).addClass('selected');
                // }
            }
        });

        var that = this;
        // Handle click on checkbox
        $('#example tbody').on('click', 'input[type="checkbox"]', function(e){
            var $row = $(this).closest('tr');

            // Get row data
            var data = table.row($row).data();

            // Get row ID
            var rowId = data[0];

            // Determine whether row ID is in the list of selected row IDs 
            var index = $.inArray(rowId, rows_selected);

            // If checkbox is checked and row ID is not in list of selected row IDs
            if(this.checked && index === -1){
                rows_selected.push(rowId);

            // Otherwise, if checkbox is not checked and row ID is in list of selected row IDs
            } else if (!this.checked && index !== -1){
                rows_selected.splice(index, 1);
            }

            if(this.checked){
                $row.addClass('selected');
            } else {
                $row.removeClass('selected');
            }

            // Update state of "Select all" control
            that.updateDataTableSelectAllCtrl(table);

            // Prevent click event from propagating to parent
            e.stopPropagation();
        });

        // Handle click on table cells with checkboxes
        // $('#example').on('click', 'tbody td, thead th:first-child', function(e){
        //     $(this).parent().find('input[type="checkbox"]').trigger('click');
        // });

        // Handle click on "Select all" control
        $('#example thead input[name="select_all"]').on('click', function(e){
            if(this.checked){
                $('#example tbody input[type="checkbox"]:not(:checked)').trigger('click');
            } else {
                $('#example tbody input[type="checkbox"]:checked').trigger('click');
            }

            // Prevent click event from propagating to parent
            e.stopPropagation();
        });

        // Handle table draw event
        table.on('draw', function(){
            // Update state of "Select all" control
            that.updateDataTableSelectAllCtrl(table);
        });   
        this.setState({datatable: table});
    }

    updateDataTableSelectAllCtrl(table){
        var $table             = table.table().node();
        var $chkbox_all        = $('tbody input[type="checkbox"]', $table);
        var $chkbox_checked    = $('tbody input[type="checkbox"]:checked', $table);
        var chkbox_select_all  = $('thead input[name="select_all"]', $table).get(0);

        // If none of the checkboxes are checked
        if($chkbox_checked.length === 0){
            chkbox_select_all.checked = false;
            if('indeterminate' in chkbox_select_all){
                chkbox_select_all.indeterminate = false;
            }

        // If all of the checkboxes are checked
        } else if ($chkbox_checked.length === $chkbox_all.length){
            chkbox_select_all.checked = true;
            if('indeterminate' in chkbox_select_all){
                chkbox_select_all.indeterminate = false;
            }

        // If some of the checkboxes are checked
        } else {
            chkbox_select_all.checked = true;
            if('indeterminate' in chkbox_select_all){
                chkbox_select_all.indeterminate = true;
            }
        }
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
        var {projects, datatable} = this.state;
        if(isEdit){
            this.projectModal.open(isEdit, index, projects[index].name);
        }
    }

    render() {
        var {projects} = this.state;        
        console.log('render', projects);
        var that = this;
        var rows = _.map(projects, function(p, index){
            return (
                <tr key={index}>
                    <td>{p.id}</td>
                    <td></td>
                    <td><Label className={p.current=='Active' ? 'bg-darkgreen45 fg-white' : 'bg-darkgray25 fg-black'}>{p.current}</Label></td>
                    <td><strong>{p.name}</strong><br/><small>{p.time}</small></td>
                    <td>{p.users} Users</td>
                    <td>
                        <Row>
                            <Col xs={3} collapseRight>
                                <img src={p.owner.picture} width='30' height='30' />
                            </Col>
                            <Col xs={9} collapseLeft>
                                <div style={{top: 8, fontSize: 16, lineHeight: 1, position: 'relative'}}>{p.owner.name}</div>
                            </Col>
                        </Row>
                    </td>
                    <td>
                        <ProjectModal ref={(c) => that.projectModal = c} callbackModal={::that.callbackModal}/>
                        <Button outlined bsStyle='primary' onClick={that.launchModal.bind(that, true, index)}>
                            <Icon style={{fontSize: 12}} glyph={'icon-fontello-pencil-1'} />
                            Edit
                        </Button>
                    </td>
                </tr>
            )
        });
        return (
            <div className='page-projects'>
                <div className='controlpanel'>
                    <div className='left'>
                        <Button outlined bsStyle='primary' onClick={::that.removeProjects}>
                            <Icon style={{fontSize: 16}} glyph={'icon-fontello-cancel'} />
                            Delete
                        </Button>
                    </div>
                    <div className='right'>
                        <Button outlined bsStyle='primary' onClick={::that.removeProjects}>
                            <Icon style={{fontSize: 14}} glyph={'icon-flatline-film'} />
                            Create New project
                        </Button>
                    </div>
                </div>
                <Table ref={(c) => this.example = c} id='example' className='display' cellSpacing='0' width='100%'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th><input name="select_all" value="1" type="checkbox"/></th>
                        <th>Current</th>
                        <th>Project Name</th>
                        <th>Users</th>
                        <th>Owner</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </Table>
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
                      <br/>
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
