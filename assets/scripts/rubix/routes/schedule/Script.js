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

export class Script extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  handleChange(key, e) {
  }

  render(){
    return (
      <div className="page-script">
        <Form className='frm_script'>
          <ButtonToolbar className="toolbar">
            <ButtonGroup sm>
              <Button bsStyle='info' inverse>
                <Icon glyph={'icon-fontello-box'} />&nbsp;Hide Elements
              </Button>
              <Button bsStyle='info' inverse>
                <Icon glyph={'icon-fontello-bicycle'} />&nbsp;Hide Nouns
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Form>
      </div>
    );
  }
}