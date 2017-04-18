import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
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
        <div className="strips-container">
            <ul className="strips strip-medium sort-select tooltip-demo">
                <li className="sort-item">
                    <div className="banner">
                        <div className="sort-handle"><i className="fa fa-ellipsis-v"></i></div>
                        <div className="dayban-text">-- It's A Wonderful Life --</div>
                    </div>
                </li>
                <li className="sort-item ui-selected">
                    <div className="strip intnight">
                        <div className="sort-handle"><i className="fa fa-ellipsis-v"></i></div>
                        <div className="strip-col-1">
                            <div className="str-sc">202PT1</div>
                        </div>
                        <div className="strip-col-2">
                            <div className="strip-row-1">
                                <div className="str-ie">INT</div>
                                <div className="str-set">GEORGE'S OFFICE</div>
                                <div className="str-dn">NIGHT</div>
                            </div>
                            <div className="strip-row-2">
                                <div className="str-unit">Unit: First Unit</div>
                                <div className="str-loc">Loc: Bailey Savings &amp; Loan</div>
                                <div className="str-scpg">Script Pg: 34</div>
                            </div>
                            <div className="strip-row-3">
                                <div className="str-desc">You can type quite a lot of text in the description field compared to MMS.</div>
                            </div>
                        </div>
                        <div className="strip-col-3">
                            <div className="strip-row-1">
                                <div className="str-pg">1</div>
                                <div className="str-eighth">3/8</div>
                            </div>
                            <div className="strip-row-2">
                                <div className="str-time">Day 2</div>
                            </div>
                            <div className="strip-row-3">
                                <div className="str-time">1:30</div>
                            </div>
                        </div>

                        <div className="strip-col-4">
                            <div className="strip-row-1">
                                <div className="str-cast">1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40</div>
                            </div>
                            <div className="strip-row-2">
                                <div className="str-bg">BG: 100</div>
                                <div className="str-veh">Veh: 100</div>
                                <div className="str-fx">FX</div>
                                <div className="str-stunt">Stunts</div>
                                <div className="str-animal">Animals</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="sort-item">
                <div className="daystrip">
                    <div className="sort-handle"><i className="fa fa-ellipsis-v"></i></div>
                    <div className="dayban-text">-- END OF DAY 10 - July 19, 2017 - 5 2/8 Pgs. (11:15 Hours) --</div>
                </div>
                </li>
                <li className="sort-item">
                <div className="strip intnight">
                    <div className="sort-handle"><i className="fa fa-ellipsis-v"></i></div>
                    <div className="strip-col-1">
                    <div className="str-sc">202PT1</div>
                    </div>
                    <div className="strip-col-2">
                    <div className="strip-row-1">
                        <div className="str-ie">INT</div>
                        <div className="str-set">BEDROOM -- GEORGE AND MARY'S HOUSE</div>
                        <div className="str-dn">NIGHT</div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-unit">Unit: First Unit</div>
                        <div className="str-loc">Loc: Bailey House</div>
                        <div className="str-scpg">Script Pg: 34</div>
                    </div>
                    <div className="strip-row-3">
                        <div className="str-desc">George learns of Mary's pregnancy.</div>
                    </div>
                    </div>
                    <div className="strip-col-3">
                    <div className="strip-row-1">
                        <div className="str-pg">1</div>
                        <div className="str-eighth">3/8</div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-time">Day 2</div>
                    </div>
                    <div className="strip-row-3">
                        <div className="str-time">1:30</div>
                    </div>
                    </div>
                    <div className="strip-col-4">
                    <div className="strip-row-1">
                        <div className="str-cast">1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18</div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-bg">BG: 100</div>
                        <div className="str-veh">Veh: 100</div>
                        <div className="str-fx">FX</div>
                        <div className="str-stunt">Stunts</div>
                        <div className="str-animal">Animals</div>
                    </div>
                    </div>
                </div>
                </li>
                <li className="sort-item">
                <div className="strip intday">
                    <div className="sort-handle"><i className="fa fa-ellipsis-v"></i></div>
                    <div className="strip-col-1">
                    <div className="str-sc">32</div>
                    </div>
                    <div className="strip-col-2">
                    <div className="strip-row-1">
                        <div className="str-ie">INT</div>
                        <div className="str-set">MARTINI'S NEW HOUSE</div>
                        <div className="str-dn">DAY</div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-unit">Unit: First Unit</div>
                        <div className="str-loc">Loc: Los Feliz House</div>
                        <div className="str-scpg">Script Pg: 34</div>
                    </div>
                    <div className="strip-row-3">
                        <div className="str-desc">This strip also has a red flag in the cast. Try hovering over it!</div>
                    </div>
                    </div>
                    <div className="strip-col-3">
                    <div className="strip-row-1">
                        <div className="str-pg">1</div>
                        <div className="str-eighth">3/8</div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-time">Day 2</div>
                    </div>
                    <div className="strip-row-3">
                        <div className="str-time">1:30</div>
                    </div>
                    </div>
                    <div className="strip-col-4">
                    <div className="strip-row-1">
                        <div className="str-cast">1, 2, 4, 5, 6, <span className="str-cast-flag" data-toggle="tooltip" data-placement="top" title="Cousin Tilly can't work on this day">15</span></div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-bg"></div>
                        <div className="str-veh">Veh: 1</div>
                        <div className="str-fx"></div>
                        <div className="str-stunt"></div>
                        <div className="str-animal"></div>
                    </div>
                    </div>
                </div>
                </li>
                <li className="sort-item">
                <div className="strip extday">
                    <div className="sort-handle"><i className="fa fa-ellipsis-v"></i></div>
                    <div className="strip-col-1">
                    <div className="str-sc">17</div>
                    </div>
                    <div className="strip-col-2">
                    <div className="strip-row-1">
                        <div className="str-ie">EXT</div>
                        <div className="str-set">BAILEY PARK</div>
                        <div className="str-dn">DAY</div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-unit">Unit: First Unit</div>
                        <div className="str-loc">Loc: Burbank Lot</div>
                        <div className="str-scpg">Script Pg: 34</div>
                    </div>
                    <div className="strip-row-3">
                        <div className="str-desc">Other elements can be flagged too. This strip has a flag on a vehicle.</div>
                    </div>
                    </div>
                    <div className="strip-col-3">
                    <div className="strip-row-1">
                        <div className="str-pg">1</div>
                        <div className="str-eighth">3/8</div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-time">Day 2</div>
                    </div>
                    <div className="strip-row-3">
                        <div className="str-time">1:30</div>
                    </div>
                    </div>
                    <div className="strip-col-4">
                    <div className="strip-row-1">
                        <div className="str-cast">1, 2, 4, 5, 6</div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-bg">BG: 3</div>
                        <div className="str-veh">Veh: <span className="str-cast-flag" data-toggle="tooltip" data-placement="top" title="Potter's Car can't work on this day">1</span></div>
                        <div className="str-fx"></div>
                        <div className="str-stunt"></div>
                        <div className="str-animal"></div>
                    </div>
                    </div>
                </div>
                </li>
                <li className="sort-item">
                <div className="strip extnight">
                    <div className="sort-handle"><i className="fa fa-ellipsis-v"></i></div>
                    <div className="strip-col-1">
                    <div className="str-sc">64</div>
                    </div>
                    <div className="strip-col-2">
                    <div className="strip-row-1">
                        <div className="str-ie">EXT</div>
                        <div className="str-set">CEMETERY</div>
                        <div className="str-dn">NIGHT</div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-unit">Unit: First Unit</div>
                        <div className="str-loc">Loc: Hollywood Forever Cemetery</div>
                        <div className="str-scpg">Script Pg: 34</div>
                    </div>
                    <div className="strip-row-3">
                        <div className="str-desc">George discovers his brother's death</div>
                    </div>
                    </div>
                    <div className="strip-col-3">
                    <div className="strip-row-1">
                        <div className="str-pg">1</div>
                        <div className="str-eighth">3/8</div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-time">Day 2</div>
                    </div>
                    <div className="strip-row-3">
                        <div className="str-time">1:30</div>
                    </div>
                    </div>
                    <div className="strip-col-4">
                    <div className="strip-row-1">
                        <div className="str-cast">1, 2, 4, 5, 6</div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-bg"></div>
                        <div className="str-veh">Veh: 1</div>
                        <div className="str-fx"></div>
                        <div className="str-stunt"></div>
                        <div className="str-animal"></div>
                    </div>
                    </div>
                </div>
                </li>
                <li className="sort-item">
                <div className="daystrip">
                    <div className="sort-handle"><i className="fa fa-ellipsis-v"></i></div>
                    <div className="dayban-text">-- END OF DAY 11 - July 22, 2017 - 3 2/8 Pgs. (12:15 Hours) --</div>
                </div>
                </li>
                <li className="sort-item">
                <div className="strip intnight">
                    <div className="sort-handle"><i className="fa fa-ellipsis-v"></i></div>
                    <div className="strip-col-1">
                    <div className="str-sc">202PT1</div>
                    </div>
                    <div className="strip-col-2">
                    <div className="strip-row-1">
                        <div className="str-ie">INT</div>
                        <div className="str-set">BEDROOM -- GEORGE AND MARY'S HOUSE</div>
                        <div className="str-dn">NIGHT</div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-unit">Unit: First Unit</div>
                        <div className="str-loc">Loc: Bailey House</div>
                        <div className="str-scpg">Script Pg: 34</div>
                    </div>
                    <div className="strip-row-3">
                        <div className="str-desc">George learns of Mary's pregnancy.</div>
                    </div>
                    </div>
                    <div className="strip-col-3">
                    <div className="strip-row-1">
                        <div className="str-pg">1</div>
                        <div className="str-eighth">3/8</div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-time">Day 2</div>
                    </div>
                    <div className="strip-row-3">
                        <div className="str-time">1:30</div>
                    </div>
                    </div>
                    <div className="strip-col-4">
                    <div className="strip-row-1">
                        <div className="str-cast">1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18</div>
                    </div>
                    <div className="strip-row-2">
                        <div className="str-bg">BG: 100</div>
                        <div className="str-veh">Veh: 100</div>
                        <div className="str-fx">FX</div>
                        <div className="str-stunt">Stunts</div>
                        <div className="str-animal">Animals</div>
                    </div>
                    </div>
                </div>
                </li>
            </ul>
        </div>
      </div>
    );
  }
}