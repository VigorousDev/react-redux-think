import React from 'react';
import ReactDOM from 'react-dom';
import {
  Row,
  Col,
  Grid,
  Icon,
  Button,
  ButtonToolbar,
  ButtonGroup,
  DropdownHoverButton,
  MenuItem,
  Form,
  FormControl,
  FormGroup,
  ControlLabel
} from '@sketchpixy/rubix';

export class Stripboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  handleChange(key, e) {
  }

  render(){
    return (
      <div className="page-stripboard">        
        <Form className='frm_stripboard'>
          <ButtonToolbar className="toolbar">
            <ButtonGroup sm>
              <Button bsStyle='info' inverse>
                <Icon glyph={'icon-fontello-plus-squared'} />&nbsp;New
              </Button>
              <Button bsStyle='info' inverse>
                <Icon glyph={'icon-fontello-docs-1'} />&nbsp;Duplicate
              </Button>            
              <Button bsStyle='info' inverse disabled>
              <Icon glyph={'icon-fontello-flow-merge'} />&nbsp;Merge
              </Button>        
              <Button bsStyle='info' inverse>
                <Icon glyph={'icon-fontello-trash-1'} />&nbsp;Delete
              </Button>
              <DropdownHoverButton id="bg-nested-dropdown" bsStyle='green' 
                title={<Icon style={{fontSize: 12, color: 'white'}} glyph={'icon-fontello-menu-1'} />}>
                <MenuItem eventKey="1"><Icon glyph={'icon-fontello-newspaper'} />&nbsp;Element Manager</MenuItem>
                <MenuItem eventKey="2"><Icon glyph={'icon-fontello-th-list-5'} />&nbsp;Stripboard Manager</MenuItem>
                <MenuItem eventKey="3"><Icon glyph={'icon-fontello-calendar-1'} />&nbsp;Calendar Manager</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4"><Icon glyph={'icon-fontello-sort-alt-up'} />&nbsp;Sort Strips</MenuItem>
                <MenuItem eventKey="5"><Icon glyph={'icon-fontello-flash'} />&nbsp;Auto Schedule</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="6"><Icon glyph={'icon-fontello-export-4'} />&nbsp;Export Data</MenuItem>
                <MenuItem eventKey="7"><Icon glyph={'icon-fontello-doc-1'} />&nbsp;Save Documents</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="8"><Icon glyph={'icon-fontello-cog-1'} />&nbsp;Schedule Settings</MenuItem>
              </DropdownHoverButton>
              
            </ButtonGroup>

            <ButtonGroup sm className='pull-right'>
              <Button bsStyle='info' inverse>
                <Icon glyph={'icon-fontello-left-6'} />&nbsp;Prev
              </Button>
              <Button bsStyle='info' inverse>
                Next&nbsp;<Icon glyph={'icon-fontello-right-6'} />
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Form>
      </div>
    );
  }
}