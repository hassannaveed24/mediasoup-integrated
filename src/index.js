// import ReactDOM from 'react-dom';
// import React from 'react';

// import {ConnectedRouter} from 'connected-react-router'
// import {Provider} from 'react-redux';
// import {Route, Switch} from 'react-router-dom';
// import configureStore, {history} from './store';
// import './firebase/firebase';
// import App from './containers/App';

// const rootEl = document.getElementById('app-site');
// export const store = configureStore();
// let render = () => {
//   // Dynamically import our main App component, and render it
//   const MainApp = require('./MainApp').default;
//   ReactDOM.render(
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <Switch>
//           <Route path="/" component={App} />
//         </Switch>
//       </ConnectedRouter>
//     </Provider>,
//     rootEl
//   );
// };
// render();


import React, { useEffect } from 'react';
import { render } from 'react-dom';
import MediaSoup from './_single';





render(
	// <Provider store={store}>
	// 	<RoomContext.Provider value={roomClient}>
	// 		<Room />
	// 	</RoomContext.Provider>
	// </Provider>,
	<MediaSoup />,

	document.getElementById('app-site')
);