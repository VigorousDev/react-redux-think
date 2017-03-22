import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import {
  Row,
  Col,
  Grid,
  Icon,
  Button,
  Label,
  Panel,
  Table,
  PanelBody,
  PanelHeader,
  FormControl,
  PanelContainer,
} from '@sketchpixy/rubix';

class DatatableComponent extends React.Component {  
    constructor(props){
        super(props);  
        console.log('constructor');
        var projects = [
                {
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
                    'current': 'Switch',
                    'name': 'Casablanca',
                    'time': 'Created 01.09.2017 09:23AM',
                    'users': 3,
                    'owner': {
                        'picture': '/imgs/app/avatars/avatar0.png',
                        'name': 'John Smith'
                    }
                },
                {
                    'current': 'Switch',
                    'name': 'The Wizard of Oz',
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
        console.log('componentDidMount');
        this.initializeDatatable();
    }
    initializeDatatable(){
        var rows_selected = [];
        var table = $(ReactDOM.findDOMNode(this.example))
        .DataTable({
            'columnDefs': [{
                    'targets': 0,
                    'searchable': false,
                    'orderable': false,
                    'width': '1%',
                    'className': 'dt-body-center',
                    'render': function (data, type, full, meta){
                        return '<input type="checkbox">';
                    }
                },
                {
                    'className': 'dt-body-center',
                    'targets':1,
                    'searchable': false
                },
                {
                    'className': 'dt-body-center',
                    'targets': 3,
                    'searchable': false,
                    'orderable': false
                },
                {
                    'targets': 5,
                    'searchable': false,
                    'orderable': false
                }
            ],
            'order': [[1, 'asc']],
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

        // Handle click on checkbox
        var that= this;
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

    prompt(index) {
        var {projects,datatable} = this.state; 
        
        vex.dialog.prompt({
            message: 'Edit Project',
            content: 'djflkd',
            placeholder: projects[index].name,
            callback: (value) => {
                projects[index].name = value;
                this.setState({projects: projects});
                datatable.rows().invalidate().draw();
            }
        });
    }

    render() {
        console.log('render');
        var {projects} = this.state;
        var that = this;
        var rows = _.map(projects, function(p, index){
            console.log('render - ', index);
            return (
                <tr key={index}>
                    <td>{index+1}</td>
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
                        <Button onClick={that.prompt.bind(that, index)}>
                            <Icon style={{fontSize: 12}} glyph={'icon-fontello-pencil-1'} />
                            Edit
                        </Button>
                    </td>
                </tr>
            )
        });
        return (
            <Table ref={(c) => this.example = c} id='example' className='display' cellSpacing='0' width='100%'>
                <thead>
                <tr>
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
