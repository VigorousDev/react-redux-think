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
import SortableTree from 'react-sortable-tree';

const maxDepth = 5;

export class Stripboard extends React.Component {
  constructor(props){
    super(props);

    const renderDepthTitle = ({ path }) => `Depth: ${path.length}`;

    this.state = {
        searchString: '',
        searchFocusIndex: 0,
        searchFoundCount: null,
        treeData: [
            {
                title: '`title`',
                subtitle: '`subtitle`',
                expanded: true,
                children: [
                    {
                        title: 'Child Node',
                        subtitle: 'Defined in `children` array belonging to parent',
                    },
                    {
                        title: 'Nested structure is rendered virtually',
                        subtitle: (
                            <span>
                                The tree uses&nbsp;
                                <a href="https://github.com/bvaughn/react-virtualized">
                                    react-virtualized
                                </a>
                                <br/>
                                &nbsp;and the relationship lines are more of a visual trick.fsjdfkjaslfjsldjflaksjflk
                                dfjasjkdfklajslf
                                <br/>
                                23jhskjfklasjdf
                                23892982389

                            </span>
                        ),
                    },
                ],
            },
            {
                expanded: true,
                title: 'Any node can be the parent or child of any other node',
                children: [
                    {
                        expanded: true,
                        title: 'Chicken',
                        children: [
                            { title: 'Egg' },
                        ],
                    },
                ],
            },
            {
                title: 'Button(s) can be added to the node',
                subtitle: 'Node info is passed when generating so you can use it in your onClick handler',
            },
            {
                title: 'Show node children by setting `expanded`',
                subtitle: ({ node }) => `expanded: ${node.expanded ? 'true' : 'false'}`,
                children: [
                    {
                        title: 'Bruce',
                        subtitle: ({ node }) => `expanded: ${node.expanded ? 'true' : 'false'}`,
                        children: [
                            { title: 'Bruce Jr.' },
                            { title: 'Brucette' },
                        ],
                    },
                ],
            },
            {
                title: 'Advanced',
                subtitle: 'Settings, behavior, etc.',
                children: [
                    {
                        title: (
                            <div>
                                <div
                                    style={{
                                        backgroundColor: 'gray',
                                        display: 'inline-block',
                                        borderRadius: 10,
                                        color: '#FFF',
                                        padding: '0 5px',
                                    }}
                                >
                                    Any Component
                                </div>

                                &nbsp;can be used for `title`
                            </div>
                        ),
                    },
                    {
                        expanded: true,
                        title: 'Limit nesting with `maxDepth`',
                        subtitle: `It's set to ${maxDepth} for this example`,
                        children: [
                            {
                                expanded: true,
                                title: renderDepthTitle,
                                children: [
                                    {
                                        expanded: true,
                                        title: renderDepthTitle,
                                        children: [
                                            { title: renderDepthTitle },
                                            {
                                                title: ({ path }) => (path.length >= maxDepth ?
                                                    'This cannot be dragged deeper' :
                                                    'This can be dragged deeper'
                                                ),
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: 'Disable dragging on a per-node basis with the `canDrag` prop',
                        subtitle: 'Or set it to false to disable all dragging.',
                        noDragging: true,
                    },
                    {
                        title: 'You cannot give this children',
                        subtitle: 'Dropping is prevented via the `canDrop` API using `nextParent`',
                        noChildren: true,
                    },
                    {
                        title: 'When node contents are really long, it will cause a horizontal scrollbar' +
                            ' to appear. Deeply nested elements will also trigger the scrollbar.',
                    },
                ],
            },
        ],
    };

    this.updateTreeData = this.updateTreeData.bind(this);
    this.expandAll = this.expandAll.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
  }

  updateTreeData(treeData) {
      this.setState({ treeData });
  }

  expand(expanded) {
      this.setState({
          treeData: toggleExpandedForAll({
              treeData: this.state.treeData,
              expanded,
          }),
      });
  }

  expandAll() {
      this.expand(true);
  }

  collapseAll() {
      this.expand(false);
  }

  componentDidMount(){

  }

  handleChange(key, e) {
  }

  render(){
    const projectName = 'React Sortable Tree';
    const authorName = 'Chris Fritz';
    const authorUrl = 'https://github.com/fritz-c';
    const githubUrl = 'https://github.com/fritz-c/react-sortable-tree';

    const {
        treeData,
        searchString,
        searchFocusIndex,
        searchFoundCount,
    } = this.state;
    const alertNodeInfo = ({
        node,
        path,
        treeIndex,
        lowerSiblingCounts: _lowerSiblingCounts,
    }) => {
        const objectString = Object.keys(node)
            .map(k => (k === 'children' ? 'children: Array' : `${k}: '${node[k]}'`))
            .join(',\n   ');

        alert( // eslint-disable-line no-alert
            'Info passed to the button generator:\n\n' +
            `node: {\n   ${objectString}\n},\n` +
            `path: [${path.join(', ')}],\n` +
            `treeIndex: ${treeIndex}`
        );
    };

    const selectPrevMatch = () => this.setState({
        searchFocusIndex: searchFocusIndex !== null ?
            ((searchFoundCount + searchFocusIndex - 1) % searchFoundCount) :
            searchFoundCount - 1,
    });

    const selectNextMatch = () => this.setState({
        searchFocusIndex: searchFocusIndex !== null ?
            ((searchFocusIndex + 1) % searchFoundCount) :
            0,
    });

    const isVirtualized = true;
    const treeContainerStyle = isVirtualized ? { height: 700 } : {};


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
        <div>
          <section>
              <button onClick={this.expandAll}>
                  Expand All
              </button>

              <button onClick={this.collapseAll}>
                  Collapse All
              </button>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <form
                  style={{ display: 'inline-block' }}
                  onSubmit={(event) => {
                      event.preventDefault();
                  }}
              >
                  <label htmlFor="find-box">
                      Search:&nbsp;

                      <input
                          id="find-box"
                          type="text"
                          value={searchString}
                          onChange={event => this.setState({ searchString: event.target.value })}
                      />
                  </label>

                  <button
                      type="button"
                      disabled={!searchFoundCount}
                      onClick={selectPrevMatch}
                  >
                      &lt;
                  </button>

                  <button
                      type="submit"
                      disabled={!searchFoundCount}
                      onClick={selectNextMatch}
                  >
                      &gt;
                  </button>

                  <span>
                      &nbsp;
                      {searchFoundCount > 0 ? (searchFocusIndex + 1) : 0}
                      &nbsp;/&nbsp;
                      {searchFoundCount || 0}
                  </span>
              </form>

              <div style={treeContainerStyle}>
                  <SortableTree
                      treeData={treeData}
                      onChange={this.updateTreeData}
                      onMoveNode={({ node, treeIndex, path }) =>
                          console.debug( // eslint-disable-line no-console
                              'node:', node,
                              'treeIndex:', treeIndex,
                              'path:', path,
                          )
                      }
                      maxDepth={maxDepth}
                      searchQuery={searchString}
                      searchFocusOffset={searchFocusIndex}
                      canDrag={({ node }) => !node.noDragging}
                      canDrop={({ nextParent }) => !nextParent || !nextParent.noChildren}
                      searchFinishCallback={matches =>
                          this.setState({
                              searchFoundCount: matches.length,
                              searchFocusIndex: matches.length > 0 ? searchFocusIndex % matches.length : 0,
                          })
                      }
                      rowHeight={100}
                      isVirtualized={isVirtualized}
                      generateNodeProps={rowInfo => ({
                          buttons: [
                              <button
                                  style={{
                                      verticalAlign: 'middle',
                                  }}
                                  onClick={() => alertNodeInfo(rowInfo)}
                              >
                                  ℹ
                              </button>,
                          ],
                      })}
                  />
              </div>
          </section>
        </div>
      </div>
    );
  }
}