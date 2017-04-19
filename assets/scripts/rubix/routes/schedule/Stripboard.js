import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import moment from 'moment';
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
import {DATATYPES} from '../../../core/datatypes';

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
            },
            4: {
                name: 'Uncle Billy',
                occr: 11,
                n_a: ['2017/07/12', '2017/07/13']
            },
            5: {
                name: 'Mr. Potter',
                occr: 2,
                n_a: ['2017/07/11']
            }
        }        
    };    

    var breakdowns = {
        maxid: 6,
        data: {
            1: {
                name: '202PT1',
                int_ext: 'INT',
                set: 'GEORGE\'S OFFICE',
                day_night: 'NIGHT',
                description: 'You can type quite a lot of text in the description field compared to MMS.',
                pages: 100,
                eighth: 3,
                scriptPg: '100AB',
                scriptDay: 'Day 2', 
                unit: 'First Unit',
                location: 'Bailey Savings & Loan',
                hours: 10,
                mins: 30,
                comments: 'This is an extremely very long comment that I am making about this breakdown sheet right now.',
                elements: {
                    casts :[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                    bg: [1],
                    veh: [1],
                    fx: [1],
                    stunt: [1],
                    animal: [1],
                }
            },
            2: {
                name: '17',
                int_ext: 'INT',
                set: 'BEDROOM -- GEORGE AND MARY\'S HOUSE',
                day_night: 'NIGHT',
                description: 'George learns of Mary\'s pregnancy.',
                pages: 100,
                eighth: 3,
                scriptPg: '1',
                scriptDay: 'Day 2', 
                unit: 'First Unit',
                location: 'Bailey House',
                hours: 1,
                mins: 30,
                comments: 'This is an extremely very long comment that I am making about this breakdown sheet right now.',
                elements: {
                    casts :[1, 2, 3, 4, 5],                    
                    bg: [1],
                }
            },
            3: {
                name: '32',
                int_ext: 'INT',
                set: 'MARTINI\'S NEW HOUSE',
                day_night: 'DAY',
                description: 'This strip also has a red flag in the cast. Try hovering over it!',
                pages: 100,
                eighth: 3,
                scriptPg: '34',
                scriptDay: 'Day 2', 
                unit: 'First Unit',
                location: 'Los Feliz House',
                hours: 1,
                mins: 30,
                comments: 'This is an extremely very long comment that I am making about this breakdown sheet right now.',
                elements: {
                    casts :[1, 2, 3, 4, 5],
                    veh: [1],
                }
            },
            4: {
                name: '17',
                int_ext: 'EXT',
                set: 'BAILEY PARK',
                day_night: 'DAY',
                description: 'Other elements can be flagged too. This strip has a flag on a vehicle.',
                pages: 100,
                eighth: 3,
                scriptPg: '34',
                scriptDay: 'Day 2', 
                unit: 'First Unit',
                location: 'Burbank Lot',
                hours: 1,
                mins: 30,
                comments: 'This is an extremely very long comment that I am making about this breakdown sheet right now.',
                elements: {
                    casts :[1, 2, 3, 5, 6],                    
                    bg: [1],
                }
            },
            5: {
                name: '64',
                int_ext: 'EXT',
                set: 'Hollywood Forever Cemetery',
                day_night: 'NIGHT',
                description: 'George discovers his brother\'s death',
                pages: 100,
                eighth: 3,
                scriptPg: '34',
                scriptDay: 'Day 2', 
                unit: 'First Unit',
                location: 'Burbank Lot',
                hours: 1,
                mins: 30,
                comments: 'This is an extremely very long comment that I am making about this breakdown sheet right now.',
                elements: {
                    casts :[3,5,7],
                    bg: [1],
                }
            },
            6: {
                name: '202PT1',
                int_ext: 'INT',
                set: 'BEDROOM -- GEORGE AND MARY\'S HOUSE',
                day_night: 'NIGHT',
                description: 'George learns of Mary\'s pregnancy.',
                pages: 100,
                eighth: 3,
                scriptPg: '34',
                scriptDay: 'Day 2', 
                unit: 'First Unit',
                location: 'Bailey House',
                hours: 1,
                mins: 30,
                comments: 'This is an extremely very long comment that I am making about this breakdown sheet right now.',
                elements: {
                    casts :[1, 2, 3, 4, 5, 6, 10, 18],                    
                    bg: [1],
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
                date: '2017/07/11',
                hours: 10,
                mins: 30,
                pgs: '4 3/8',
            },
            2: {
                number: 2,
                date: '2017/07/12',
                hours: 11,
                mins: 25,
                pgs: '5 6/8',
            },
        }
    };

    var groups = {
        maxid: 1,
        data: {
            1: [
                {
                    type: DATATYPES.BANNER,
                    id: '2',
                },
                {
                    type: DATATYPES.BREAKDOWN,
                    id: '4'
                },
                {
                    type: DATATYPES.BREAKDOWN,
                    id: '5'
                }
            ]
        }
    };

    var strip = [
        {
            type: DATATYPES.BANNER,
            id: '1',
            position: 0,
        },
        {
            type: DATATYPES.BREAKDOWN,
            id: '1',
            position: 1,
        },
        {
            type: DATATYPES.DAY,
            id: '1',
            position: 2,
        },
        {
            type: DATATYPES.BREAKDOWN,
            id: '2',
            position: 3,
        },
        {
            type: DATATYPES.BREAKDOWN,
            id: '3',
            position: 4,
        },
        {
            type: DATATYPES.GROUP,
            id: '1',
            position: 5,
        },
        {
            type: DATATYPES.DAY,
            id: '2',
            position: 6,
        },
        {
            type: DATATYPES.BREAKDOWN,
            id: '6',
            position: 7,
        }
    ];

    this.state = {
        casts: casts,
        breakdowns: breakdowns,
        banners: banners,
        days: days,
        groups: groups,
        strip: strip,
    };
  }

  componentDidMount(){
      this.sortable_init();
  }

  group_onclick(){
    let ids = [];
    $('.sort-select > .ui-selected').each(function(e){
        $(this).removeClass('ui-selected');
        ids.push($(this).attr('id'));
    });
    if(ids.length == 0) // none are selected
        return;
    
    let {strip} = this.state;
    let newStrip = [];
    let position = 0; 
    if(ids.length == 1){ // one strip selected
        let selected = ids[0];
        let selectedStrip = strip[selected];
        if(selectedStrip.type != DATATYPES.GROUP){ // ignore not-group
            return;
        }     
        for(let i = 0; i< strip.length; i++){
            if(i == selected){
                let groupObj = this.state.groups.data[selectedStrip.id];
                if(groupObj){
                    _.map(groupObj, (o, index1)=>{
                        newStrip.push({
                            type: o.type,
                            id: o.id,
                            position: position++,
                        });              
                    });
                }      
            }else{
                newStrip.push({
                    type: strip[i].type,
                    id: strip[i].id,
                    position: position++,
                });                
            }
        }
        this.setState({strip: newStrip});
    }else{
        let {groups} = this.state;
        let newGroups = _.clone(groups, true);
        for(let i=0; i<strip.length; i++){
            if(ids.indexOf(i.toString()) == -1){
                newStrip.push({
                    type: strip[i].type,
                    id: strip[i].id,
                    position: position++,
                });
            }else{
                if(ids[0] == i){ // first occurence of group                    
                    let newGroupID = ++newGroups.maxid;
                    let newGroupData = [];
                    // build new group
                    for(let j=0; j<ids.length; j++){
                        let id = ids[j];
                        if(strip[id].type == DATATYPES.GROUP){
                            let groupObj = groups.data[strip[id].id];
                            if(groupObj){
                                _.map(groupObj, (o, index1)=>{
                                    newGroupData.push({
                                        type: o.type,
                                        id: o.id,
                                    });              
                                });
                            } 
                        }else{
                            newGroupData.push({
                                type: strip[id].type,
                                id: strip[id].id
                            });
                        }
                    }

                    newGroups.data[newGroupID] = newGroupData;
                    newStrip.push({
                        type: DATATYPES.GROUP,
                        id: newGroupID,
                        position: position++,
                    })                    
                }
            }
        }
        this.setState({strip: newStrip, groups: newGroups});
    }
  }
  stripsize_onchange(eventKey, event){
    $('.strips').removeClass('strip-small');
    $('.strips').removeClass('strip-medium');
    $('.strips').removeClass('strip-large');
    $('.strips').addClass(eventKey);
  }

  sortable_init(){
    var prev = -1;      
    var self = this;
    $(ReactDOM.findDOMNode(this.strips_container))
        .selectable({
            cancel: '.sort-handle',
            selecting: function(e, ui) { 
                var curr = $(ui.selecting.tagName, e.target).index(ui.selecting); 
                if(e.shiftKey && prev > -1) {
                    $(ui.selecting.tagName, e.target).slice(Math.min(prev, curr), 1 + Math.max(prev, curr)).addClass('ui-selected');
                    prev = -1;
                } else {
                    prev = curr;
                }
            }
        })
        .sortable({
            items: '.sort-item',
            update: function(e, ui){
                setTimeout(function(){ // wait for update is completed.
                    self.handleSortableUpdate();
                    // var ids = [];
                    // $('.sort-select').children().each(function(e){
                    //     ids.push($(this).attr('id'));
                    // });
                    // console.log(ids);
                }, 10);
            },            
            axis: 'y',
            revert: 250,
            scroll: true,
            placeholder: 'sortable-placeholder',
            forcePlaceholderSize: true,
            cursor: 'move',
            containment: 'parent',
            animation: 450,
            connectWith: ".sort-select",
            // helper: function(e, item) {
            //     item.children().each(function() {
            //         $(this).width($(this).width()); // make <tr>'s width match the cloned element
            //     });
            //     if (!item.hasClass('ui-selected')) {
            //         item.parent().children('.ui-selected').removeClass('ui-selected');
            //         item.addClass('ui-selected');
            //     }
            //     var selected = item.parent().children('.ui-selected').clone();
            //     item.data('multidrag', selected).siblings('.ui-selected').remove();
            //     return $('<div/>').append(selected); // set element to wrap the helper
            // },
            // stop: function(e, ui) {
            //     $('.ui-sortable').off('mouseup');
            //     var selected = ui.item.data('multidrag');
            //     ui.item.after(selected);
            //     ui.item.remove();
            //     $('.ui-selected').removeClass('ui-sortable-helper-stop'); // remove special class for strips
            // },        
            // start: function(e, ui){
            //     ui.placeholder.height(ui.helper[0].scrollHeight); // make placeholder space match size of selected items
            //     $('.ui-sortable').on('mouseup', function() {
            //         var selected = ui.item.data('multidrag');
            //         $(selected).addClass('ui-sortable-helper-stop'); //include special class for selected strips
            //     });
            // }
    });
  }

  handleSortableUpdate() {
    // We should only use setState to mutate our component's state,
    // so here we'll clone the items array (using lodash) and
    // update the list items through this new array.
    var newItems = _.clone(this.state.strip, true);
    var $node = $(ReactDOM.findDOMNode(this.strips_container));

    // Here's where our data-id attribute from before comes
    // into play. toArray will return a sorted array of item ids:
    var ids = [];
    $('.sort-select').children().each(function(e){
        ids.push($(this).attr('id'));
    });
    // ids = $node.sortable('toArray', { attribute: 'id' });
    // console.log(ids);

    // Now we can loop through the array of ids, find the
    // item in our array by its id (again, w/ lodash),
    // and update its position:    
    ids.forEach((id, index) => {
      var item = _.find(newItems, function(obj){return obj.desc == id});
      item.position = index;
    });

    // We'll cancel the sortable change and let React reorder the DOM instead:    
    $node.sortable('cancel');

    // After making our updates, we'll set our items
    // array to our updated array, causing items with
    // a new position to be updated in the DOM:
    this.setState({ strip: newItems });
  }

  sortable_update(val){
    let newStrip = [];
    let {strip} = this.state;
    for(let i=0; i<val.length; i++){
        let index = val[i];
        let obj = strip[index];
        newStrip.push({
            type: obj.type,
            id: obj.id
        });
    }
    console.log(newStrip);
    this.setState({strip: newStrip});
  }

  sortable_getItemContent(data){
    let content = null;
    let obj = null, title = '';
    if(!data)
        return null;
    switch(data.type){
        case DATATYPES.BANNER:
            obj = this.state.banners.data[data.id];
            title = obj ? obj.title: '!Error';
            content = <div className='banner'>
                    <div className="sort-handle"><i className="fa fa-ellipsis-v"></i>{data.position}</div>
                    <div className="dayban-text">-- {title} --</div>
                </div>;
            break;
        case DATATYPES.BREAKDOWN:
            obj = this.state.breakdowns.data[data.id];
            if(!obj){
                content = <div className="strip intnight">!Error</div>;
            }else{
                let css = obj.int_ext.toLowerCase() + obj.day_night.toLowerCase()
                content = <div className={"strip " + css}>
                    <div className="sort-handle"><i className="fa fa-ellipsis-v"></i>{data.position}</div>
                    <div className="strip-col-1">
                        <div className="str-sc">{obj.name}</div>
                    </div>
                    <div className="strip-col-2">
                        <div className="strip-row-1">
                            <div className="str-ie">{obj.int_ext}</div>
                            <div className="str-set">{obj.set}</div>
                            <div className="str-dn">{obj.day_night}</div>
                        </div>
                        <div className="strip-row-2">
                            <div className="str-unit">Unit: {obj.unit}</div>
                            <div className="str-loc">Loc: {obj.location}</div>
                            <div className="str-scpg">Script Pg: {obj.scriptPg}</div>
                        </div>
                        <div className="strip-row-3">
                            <div className="str-desc">{obj.description}</div>
                        </div>
                    </div>
                    <div className="strip-col-3">
                        <div className="strip-row-1">
                            <div className="str-pg">{obj.pages}</div>
                            <div className="str-eighth">{obj.eighth}/8</div>
                        </div>
                        <div className="strip-row-2">
                            <div className="str-time">{obj.scriptDay}</div>
                        </div>
                        <div className="strip-row-3">
                            <div className="str-time">{obj.hours}:{obj.mins}</div>
                        </div>
                    </div>

                    <div className="strip-col-4">
                        <div className="strip-row-1">
                            <div className="str-cast">{obj.elements.casts ? obj.elements.casts.join(',') : ''}</div>
                        </div>
                        <div className="strip-row-2">
                            <div className="str-bg">{obj.elements.bg ? 'BG: 100': ''}</div>
                            <div className="str-veh">{obj.elements.veh ? 'Veh: 100': ''}</div>
                            <div className="str-fx">{obj.elements.fx ? 'FX': ''}</div>
                            <div className="str-stunt">{obj.elements.stunts ? 'Stunts': ''}</div>
                            <div className="str-animal">{obj.elements.animal ? 'Animals': ''}</div>
                        </div>
                    </div>
                </div>;
            }
            break;
        case DATATYPES.DAY:
            obj = this.state.days.data[data.id];
            title = '!Error';
            if(obj){
                title = "END OF DAY " + obj.number + " - " + moment(new Date(obj.date)).format('MMMM D Y') + " - " + obj.pgs + " ("+ obj.hours + ":" + obj.mins + " Hours)";
            }
            content = <div className="daystrip">
                <div className="sort-handle"><i className="fa fa-ellipsis-v"></i>{data.position}</div>
                <div className="dayban-text">-- {title} --</div>
            </div>
            break;
        default:
            break;
    }
    return content;
  }

  sortable_getContent(){
    let {strip} = this.state;
    let self = this;
    let items = _.sortBy(strip, 'position');
    // return items.map((item, index) =>{
    //     return <li key={index} className='sort-item' id={item.desc}>{index} - id:{item.desc}, type:{item.type}</li>
    // });
    let strip_content = _.map(items, (t, index)=>{
        if(t.type == DATATYPES.GROUP){
            let obj = this.state.groups.data[t.id];
            let content = <div> !Error </div>;
            if(obj){
                content = _.map(obj, (o, index1)=>{
                    let item_content = self.sortable_getItemContent(o);
                    return (
                        <li key={index1} id={index + "_" + index1}>
                            {item_content}
                        </li>
                    )
                })
            }
            return (
                <div key={index} className='sort-group sort-item' id={index}>
                    {t.position}
                    {content}
                </div>
            )
        }else{
            let content = self.sortable_getItemContent(t);
            return (            
                <li key={index} className='sort-item' id={index}>
                    {content}
                </li>
            ) 
        };
    })
    return strip_content;
  }

  render(){
    let content = this.sortable_getContent();
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
              <Button bsStyle='info' inverse onClick={this.group_onclick.bind(this)}>
                <Icon glyph={'icon-fontello-link-2'} />&nbsp;Group
              </Button>        
              <Button bsStyle='info' inverse>
                <Icon glyph={'icon-fontello-trash-4'} />&nbsp;Recycle
              </Button>
              <DropdownHoverButton id="bg-nested-dropdown" inverse onSelect={this.stripsize_onchange.bind(this)}
                title={<Icon glyph={'icon-fontello-resize-vertical'}>&nbsp;Strip Size</Icon>}>
                <MenuItem eventKey="strip-small">Small Strips</MenuItem>
                <MenuItem eventKey="strip-medium">Medium Strips</MenuItem>
                <MenuItem eventKey="strip-large">Large Strips</MenuItem>
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
            <ul ref={(c) => this.strips_container = c} className="strips strip-medium sort-select">
                {content}
            </ul>
        </div>
      </div>
    );
  }
}