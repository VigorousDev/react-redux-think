import {createHistory} from 'history'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'

// import './core/fb'
// import './core/preloader'
import './core/magics'
import store from './redux/store'
import routes from './routes'
import render from '@sketchpixy/rubix/lib/node/router'
// import l20n from '@sketchpixy/rubix/lib/L20n'



// Pace.on("done", function(){
//     console.log('pace is done');
//     $(document.body).removeClass('pace-small');
//     Pace.stop();
// });
// Pace.stop();
// Pace.once('hide', () => {
//   $('#pace-loader').removeClass('pace-big').addClass('pace-small')
// })




// l20n.initializeLocales({
//   'locales': ['en-US', 'fr', 'it', 'ge', 'ar', 'ch'],
//   'default': 'en-US'
// });
// l20n.ready();
// render(routes, () => {
//   l20n.ready();
// });

// if (module.hot) {
//   module.hot.accept('./routes', () => {
//     // reload routes again
//     require('./routes').default
//     render(routes);
//   });
// }

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes(store)}</Router>
  </Provider>
, document.getElementById('app-container'))