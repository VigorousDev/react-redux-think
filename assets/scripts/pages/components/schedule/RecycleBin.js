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

export class RecycleBin extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  handleChange(key, e) {
  }

  render(){
    return (
      <div className="page-recyclebin">        
        <Form className='frm_recyclebin'>
          <ButtonToolbar className="toolbar">
            <ButtonGroup sm>
              <Button bsStyle='info' inverse>
                <Icon glyph={'icon-fontello-youtube-play'} />&nbsp;Move Back
              </Button>
              <Button bsStyle='info' inverse>
                <Icon glyph={'icon-fontello-cancel-3'} />&nbsp;Delete
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Form>
      </div>
    );
  }
}