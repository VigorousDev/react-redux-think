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
    
    var casts = {
        maxid: 3,
        data: {
            1: {
                name: 'George',
                occr: 103,
            },
            2: {
                name: 'Mary',
                occr: 35,
            },
            3: {
                name: 'Harry',
                occr: 11,
            }
        }        
    };

    var breakdowns = {
        maxid: 1,
        data: {
            1: {
                name: '202PT1',
                int_ext: 'INT',
                set: 'GEORGE\'S OFFICE',
                day_night: 'NIGHT',
                description: 'You can type quite a lot of text in the description field compared to MMS.',
                pages: 100,
                one_eight: 3,
                scriptPg: '100AB',
                scriptDay: 'Night 100', 
                unit: 'Splinter Unit',
                location: 'Savings & Loan',
                hours: 10,
                mins: 30,
                comments: 'This is an extremely very long comment that I am making about this breakdown sheet right now.',
                elements: {
                    type: 'cast',
                    ids: [1, 2, 3, 4, 5]
                }
            }
        }
    };

    var banners = {
        maxid: 2,
        data: {
            1: {
                title: 'It\'s A Wonderful Life',
            },
            2: {
                title: 'Test banner',
            }
        }
    };

    var days = {
        maxid: 2,
        data: {
            1: {
                number: 1,
                date: '2017/7/11',
                hours: 10,
                mins: 30,
                pgs: '4 3/8',
            },
            2: {
                number: 2,
                date: '2017/7/12',
                hours: 11,
                mins: 25,
                pgs: '5 6/8',
            },
        }
    };

    var strip = [
        {
            type: 'banner',
            id: '1',
        },
        {
            type: 'breakdown',
            id: '1'
        },
        {
            type: 'day',
            id: '2'
        }
    ];
  }

  componentDidMount(){
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
              <DropdownButton id="bg-nested-dropdown" inverse pullRight 
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