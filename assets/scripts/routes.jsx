import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import Root from './Root'

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './rubix/common/sidebar';
import Header from './rubix/common/header';
import Footer from './rubix/common/footer';

/* Pages */

import Homepage from './rubix/routes/Homepage';

import Dashboard from './rubix/routes/Dashboard';

import Inbox from './rubix/routes/Inbox';
import Mail from './rubix/routes/Mail';
import Compose from './rubix/routes/Compose';

import Gallery from './rubix/routes/Gallery';

import Social from './rubix/routes/Social';

import Posts from './rubix/routes/Posts';
import Post from './rubix/routes/Post';

import Panels from './rubix/routes/Panels';

import LineSeries from './rubix/routes/LineSeries';
import AreaSeries from './rubix/routes/AreaSeries';
import BarColSeries from './rubix/routes/BarColSeries';
import MixedSeries from './rubix/routes/MixedSeries';
import PieDonutSeries from './rubix/routes/PieDonutSeries';

import Chartjs from './rubix/routes/Chartjs';
import C3js from './rubix/routes/C3js';
import Morrisjs from './rubix/routes/Morrisjs';

import StaticTimeline from './rubix/routes/StaticTimeline';
import InteractiveTimeline from './rubix/routes/InteractiveTimeline';

import Codemirrorjs from './rubix/routes/Codemirrorjs';
import Maps from './rubix/routes/Maps';
import Editor from './rubix/routes/Editor';

import Buttons from './rubix/routes/Buttons';
import Dropdowns from './rubix/routes/Dropdowns';
import TabsAndNavs from './rubix/routes/TabsAndNavs';
import Sliders from './rubix/routes/Sliders';
import Knobs from './rubix/routes/Knobs';
import Modals from './rubix/routes/Modals';
import Messengerjs from './rubix/routes/Messengerjs';

import Controls from './rubix/routes/Controls';
import XEditable from './rubix/routes/XEditable';
import Wizard from './rubix/routes/Wizard';

import Tables from './rubix/routes/Tables';
import Datatablesjs from './rubix/routes/Datatablesjs';
import Tablesawjs from './rubix/routes/Tablesawjs';

import Grids from './rubix/routes/Grids';
import Calendar from './rubix/routes/Calendar';

import Dropzonejs from './rubix/routes/Dropzonejs';
import Cropjs from './rubix/routes/Cropjs';

import Fonts from './rubix/routes/Fonts';

import Login from './rubix/routes/Login';
import Signup from './rubix/routes/Signup';
import Invoice from './rubix/routes/Invoice';
import Pricing from './rubix/routes/Pricing';

import Lock from './rubix/routes/Lock';

/**
 * Includes Sidebar, Header and Footer.
 */
const routes = (
  <Route>
    <Route path='dashboard' component={Social} />
    <Route path='mailbox/inbox' component={Inbox} />
    <Route path='mailbox/mail' component={Mail} />
    <Route path='mailbox/compose' component={Compose} />
    <Route path='gallery' component={Gallery} />
    <Route path='blog/posts' component={Posts} />
    <Route path='blog/post' component={Post} />
    <Route path='panels' component={Panels} />
    <Route path='charts/rubix/line' component={LineSeries} />
    <Route path='charts/rubix/area' component={AreaSeries} />
    <Route path='charts/rubix/barcol' component={BarColSeries} />
    <Route path='charts/rubix/mixed' component={MixedSeries} />
    <Route path='charts/rubix/piedonut' component={PieDonutSeries} />
    <Route path='charts/chartjs' component={Chartjs} />
    <Route path='charts/c3js' component={C3js} />
    <Route path='charts/morrisjs' component={Morrisjs} />
    <Route path='timeline' component={StaticTimeline} />
    <Route path='interactive-timeline' component={InteractiveTimeline} />
    <Route path='codemirror' component={Codemirrorjs} />
    <Route path='maps' component={Maps} />
    <Route path='editor' component={Editor} />
    <Route path='ui-elements/buttons' component={Buttons} />
    <Route path='ui-elements/dropdowns' component={Dropdowns} />
    <Route path='ui-elements/tabs-and-navs' component={TabsAndNavs} />
    <Route path='ui-elements/sliders' component={Sliders} />
    <Route path='ui-elements/knobs' component={Knobs} />
    <Route path='ui-elements/modals' component={Modals} />
    <Route path='ui-elements/messenger' component={Messengerjs} />
    <Route path='forms/controls' component={Controls} />
    <Route path='forms/x-editable' component={XEditable} />
    <Route path='forms/wizard' component={Wizard} />
    <Route path='tables/bootstrap-tables' component={Tables} />
    <Route path='tables/datatables' component={Datatablesjs} />
    <Route path='tables/tablesaw' component={Tablesawjs} />
    <Route path='grid' component={Grids} />
    <Route path='calendar' component={Calendar} />
    <Route path='file-utilities/dropzone' component={Dropzonejs} />
    <Route path='file-utilities/crop' component={Cropjs} />
    <Route path='fonts' component={Fonts} />
    <Route path='invoice' component={Invoice} />
    <Route path='pricing' component={Pricing} />
  </Route>
);

const combinedRoutes = (
  <Route>
    <Route>
      {routes}
    </Route>
  </Route>
);

export default function({dispatch, getState}) {
  return (    
    <Route path='/' component={Root}>
      <IndexRoute component={Social}/>
	    <Route path='/ltr'>
	      {combinedRoutes}
	    </Route>
	 </Route>
  )
}
