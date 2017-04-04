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
import {BreakdownElements} from './BreakdownElements';

export class Breakdown extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  handleChange(key, e) {
    // let newValue = e.target.value;
    // let {data} = this.state
    // if(!data) data = {};
    // data[key] = newValue;
    // this.setState({data: data});
  }

  render(){
    return (
      <div className="page-breakdown">        
        <Form className='frm_breakdown'>
          <ButtonToolbar className="toolbar">
            <ButtonGroup sm>
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
              <Button bsStyle='info' inverse>
                <Icon style={{fontSize: 12}} glyph={'icon-fontello-plus-squared'} />&nbsp;New
              </Button>
              <Button bsStyle='info' inverse>
                <Icon style={{fontSize: 12}} glyph={'icon-fontello-docs-1'} />&nbsp;Duplicate
              </Button>            
              <Button bsStyle='info' inverse disabled>
              <Icon style={{fontSize: 12}} glyph={'icon-fontello-flow-merge'} />&nbsp;Merge
              </Button>        
              <Button bsStyle='info' inverse>
                <Icon style={{fontSize: 12}} glyph={'icon-fontello-trash-1'} />&nbsp;Delete
              </Button>
            </ButtonGroup>

            <ButtonGroup sm className='pull-right'>
              <Button bsStyle='info' inverse>
                <Icon style={{fontSize: 12}} glyph={'icon-fontello-left-6'} />&nbsp;Prev
              </Button>
              <Button bsStyle='info' inverse>
                Next&nbsp;<Icon style={{fontSize: 12}} glyph={'icon-fontello-right-6'} />
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
          <FormGroup controlId="frm_bdName">
            <FormControl type="text" className="text-center" style={{fontWeight:'bold'}} value="202PT1" onChange={::this.handleChange}/>
          </FormGroup>
          <Row>
            <Col sm={2}>
              <FormGroup controlId="frm_bdIntExt">
                <ControlLabel className="text-center">Int/Ext</ControlLabel>
                <FormControl componentClass="select" defaultValue="" onChange={::this.handleChange}>
                  <option value="int">INT</option>
                  <option value="ext">EXT</option>
                  <option value="all">I/E</option>
                </FormControl>
              </FormGroup>
            </Col>
            <Col sm={8}>
              <FormGroup controlId="frm_bdSet">
                <ControlLabel>Set</ControlLabel>
                <FormControl type="text" value="GEORGE'S OFFICE" onChange={::this.handleChange}/>
              </FormGroup>
            </Col>
            <Col sm={2}>
              <FormGroup controlId="frm_bdDayNight">
                <ControlLabel className="text-center">Day/Night</ControlLabel>
                <FormControl componentClass="select" placeholder="DAY">
                  <option value="day">DAY</option>
                  <option value="night">NIGHT</option>
                  <option value="dawn">DAWN</option>
                  <option value="dusk">DUSK</option>
                  <option value="morning">MORNING</option>
                  <option value="afternoon">AFTERNOON</option>
                  <option value="evening">EVENING</option>
                  <option value="magichour">MAGIC HOUR</option>
                  <option value="space">SPACE</option>
                </FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={10}>
              <FormGroup controlId="frm_bdDescription">
                <ControlLabel>Description</ControlLabel>
                <FormControl type="text" onChange={::this.handleChange} value="You can type quite a lot of text in the description field compared to MMS."/>
              </FormGroup>
            </Col>
            <Col sm={1}>
              <FormGroup controlId="frm_bdPages">
                <ControlLabel className="text-center">Pages</ControlLabel>
                <FormControl type="text" value="100" onChange={::this.handleChange}/>
              </FormGroup>
            </Col>
            <Col sm={1}>
              <FormGroup controlId="frm_bd18">
                <ControlLabel className="text-center">1/8</ControlLabel>
                <FormControl componentClass="select" onChange={::this.handleChange}>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </FormControl>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={2}>
              <FormGroup controlId="frm_bdScriptPg">
                <ControlLabel className="text-center">Script Pg</ControlLabel>
                <FormControl type="text" value="100AB" onChange={::this.handleChange}/>
              </FormGroup>
            </Col>
            <Col sm={2}>
              <FormGroup controlId="frm_bdScriptPg">
                <ControlLabel className="text-center">Script Day</ControlLabel>
                <FormControl type="text" value="Night 100" onChange={::this.handleChange}/>
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup controlId="frm_bdUnit">
                <ControlLabel className="text-center">Unit</ControlLabel>
                <FormControl type="text" value="Splinter Unit" onChange={::this.handleChange}/>
              </FormGroup>
            </Col>
            <Col sm={3}>
              <FormGroup controlId="frm_bdLocation">
                <ControlLabel className="text-center">Location</ControlLabel>
                <FormControl type="text" value="Savings & Loan" onChange={::this.handleChange}/>
              </FormGroup>
            </Col>
            <Col sm={1}>
              <FormGroup controlId="frm_bdHour">
                <ControlLabel className="text-center">Hour</ControlLabel>
                <FormControl type="text" value="10" onChange={::this.handleChange}/>
              </FormGroup>
            </Col>
            <Col sm={1}>
              <FormGroup controlId="frm_bdHour">
                <ControlLabel className="text-center">Mins</ControlLabel>
                <FormControl type="text" value="30" onChange={::this.handleChange}/>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <FormGroup controlId="frm_bdComments">
                <ControlLabel>Comments</ControlLabel>
                <FormControl type="text" onChange={::this.handleChange} value="This is an extremely very long comment that I am making about this breakdown sheet right now."/>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Form className='frm_elements'>
          <div className='add-elements'>
            <FormGroup controlId="frm_addElements" style={{width: 300}}>
              <FormControl type="text" onChange={::this.handleChange} placeholder="Add elements"/>
            </FormGroup>
          </div>
          <BreakdownElements/>
        </Form>
      </div>
    );
  }
}