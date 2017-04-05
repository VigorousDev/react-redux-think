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
  DropdownButton,
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
                <Icon glyph={'icon-fontello-level-down'} />&nbsp;Add Day
              </Button>
              <Button bsStyle='info' inverse>
                <Icon glyph={'icon-fontello-quote'} />&nbsp;Add Banner
              </Button>            
              <Button bsStyle='info' inverse>
              <Icon glyph={'icon-fontello-link-2'} />&nbsp;Group
              </Button>        
              <Button bsStyle='info' inverse>
                <Icon glyph={'icon-fontello-trash-4'} />&nbsp;Recycle
              </Button>
              <DropdownHoverButton id="bg-nested-dropdown" inverse 
                title={<Icon glyph={'icon-fontello-resize-vertical'}>&nbsp;Strip Size</Icon>}>
                <MenuItem eventKey="1">Small Strips</MenuItem>
                <MenuItem eventKey="2">Medium Strips</MenuItem>
                <MenuItem eventKey="3">Large Strips</MenuItem>
              </DropdownHoverButton>
            </ButtonGroup>
            <ButtonGroup sm className='pull-right'>
              <DropdownButton id="bg-nested-dropdown" inverse 
                title={<Icon glyph={'icon-fontello-menu-1'}>&nbsp;FirstPass&nbsp;</Icon>}>
                <MenuItem eventKey="1">Script Order</MenuItem>
                <MenuItem eventKey="2">First Pass</MenuItem>
                <MenuItem eventKey="3">Locked White</MenuItem>
                <MenuItem eventKey="4">Manage Stripboards</MenuItem>
              </DropdownButton>
              <DropdownButton id="bg-nested-dropdown" inverse 
                title={<Icon glyph={'icon-fontello-calendar-1'}>&nbsp;Start on Jan 6&nbsp;</Icon>}>
                <MenuItem eventKey="1">Start on Jan 6</MenuItem>
                <MenuItem eventKey="2">Six Day Weeks</MenuItem>
                <MenuItem eventKey="3">Manage Calendars...</MenuItem>
              </DropdownButton>
            </ButtonGroup>
          </ButtonToolbar>
        </Form>
      </div>
    );
  }
}