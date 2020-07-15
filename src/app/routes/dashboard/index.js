import React from 'react';
import MainCTO from 'components/dashboard/Common/MainCTO/MainCTO';
import image1 from '../../../assets/images/dashboard/image-1.png';
import image2 from '../../../assets/images/dashboard/image-2.png';
import image3 from '../../../assets/images/dashboard/image3.png';

function DashboardPage(props) {
  {
    const camData = [
      {
        source: image1,
        title: 'Back door',
        id: '1',
      },
      {
        source: image2,
        title: 'Front door',
        id: '2',
      },

      {
        source: image3,
        title: 'Office',
        id: '3',
      },
      {
        source: image1,
        title: 'Back door',
        id: '4',
      },
      {
        source: image2,
        title: 'Front door',
        id: '5',
      },

      {
        source: image3,
        title: 'Office',
        id: '6',
      }
      ,
      {
        source: image1,
        title: 'Back door',
        id: '7',
      },
      {
        source: image2,
        title: 'Front door',
        id: '8',
      },

      {
        source: image3,
        title: 'Office',
        id: '9',
      }
    ];

    const TOdata = [
      {
        id: '1',
        oxiReading: 85,
        thermoReading: 38.4,
        oxiDesc: 'High',
        thermoDesc: 'Moderate Fever',
        sourceImg: image1,
        title: 'Back door',
      },
      {
        id: '2',
        oxiReading: 0,
        thermoReading: 36.4,
        oxiDesc: '',
        thermoDesc: '',
        sourceImg: image1,
        title: 'Front door',
      },

      {
        id: '3',
        oxiReading: 0,
        thermoReading: 36.4,
        oxiDesc: '',
        thermoDesc: '',
        sourceImg: image1,
        title: 'Office',
      },
      {
        id: '4',
        oxiReading: 85,
        thermoReading: 38.4,
        oxiDesc: 'High',
        thermoDesc: 'Moderate Fever',
        sourceImg: image1,
        title: 'Back door',
      },
      {
        id: '5',
        oxiReading: 0,
        thermoReading: 36.4,
        oxiDesc: '',
        thermoDesc: '',
        sourceImg: image1,
        title: 'Front door',
      },

      {
        id: '6',
        oxiReading: 0,
        thermoReading: 36.4,
        oxiDesc: '',
        thermoDesc: '',
        sourceImg: image1,
        title: 'Office',
      }
      ,
      {
        id: '7',
        oxiReading: 85,
        thermoReading: 38.4,
        oxiDesc: 'High',
        thermoDesc: 'Moderate Fever',
        sourceImg: image1,
        title: 'Back door',
      },
      {
        id: '8',
        oxiReading: 0,
        thermoReading: 36.4,
        oxiDesc: '',
        thermoDesc: '',
        sourceImg: image1,
        title: 'Front door',
      },

      {
        id: '9',
        oxiReading: 0,
        thermoReading: 36.4,
        oxiDesc: '',
        thermoDesc: '',
        sourceImg: image1,
        title: 'Office',
      }
    ];

    return (
      <div className="app-wrapper" style={{ margin: '20px' }}>
        <MainCTO camData={camData} TOdata={TOdata} />
      </div>
    );
  }
}

export default DashboardPage;


// import domready from 'domready';
// import UrlParse from 'url-parse';
// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import randomString from 'random-string';
// import * as faceapi from 'face-api.js';
// import Logger from '../../../lib/Logger';
// import * as utils from '../../../lib/utils';
// import randomName from '../../../lib/randomName';
// import deviceInfo from '../../../lib/deviceInfo';
// import RoomClient from '../../../lib/RoomClient';
// import RoomContext from '../../../lib/RoomContext';
// import * as cookiesManager from '../../../lib/cookiesManager';
// import * as stateActions from '../../../lib/redux/stateActions';
// //import reducers from '../../../lib/redux/reducers';
// import reducers from '../../../reducers';
// import Room from '../../../lib/components/Room';
// import '../../../../src/styles/mediasoup-demo-app.css';

// //import Store from '../../../store/index';
// import { createBrowserHistory } from 'history'
// import { routerMiddleware } from 'connected-react-router';

// let roomClient;
// let roomClientObj;
// const logger = new Logger();
// //const reduxMiddlewares = [thunk];
// // const store = createStore(reducers, undefined, applyMiddleware(...reduxMiddlewares));

// const history = createBrowserHistory();
// const routeMiddleware = routerMiddleware(history);
// const middlewares = [thunk, routeMiddleware];
// const store = createStore(reducers(history), undefined, applyMiddleware(...middlewares));

// const MediaSoupDashboard = (props) => {
//   window.STORE = store;
//   RoomClient.init({ store });

//   console.log('store', store);

//   let RoomId, PeerId, DisplayName, Device, HandlerName, UseSimulcast, UseSharingSimulcast, ForceTcp, Produce, Consume, ForceH264, ForceVP9, Svc, Datachannel, ExternalVideo;
//   domready(async () => {
//     logger.debug('DOM ready');
//     await utils.initialize();
//     run();
//   });

//   async function run() {
//     logger.debug('run() [environment:%s]', process.env.NODE_ENV);

//     const urlParser = new UrlParse(window.location.href, true);
//     const peerId = randomString({ length: 8 }).toLowerCase();
//     let roomId = urlParser.query.roomId;
//     let displayName = urlParser.query.displayName || (cookiesManager.getUser() || {}).displayName;
//     const handler = urlParser.query.handler;
//     const useSimulcast = urlParser.query.simulcast !== 'false';
//     const useSharingSimulcast = urlParser.query.sharingSimulcast !== 'false';
//     const forceTcp = urlParser.query.forceTcp === 'true';
//     const produce = urlParser.query.produce !== 'false';
//     const consume = urlParser.query.consume !== 'false';
//     const forceH264 = urlParser.query.forceH264 === 'true';
//     const forceVP9 = urlParser.query.forceVP9 === 'true';
//     const svc = urlParser.query.svc;
//     const datachannel = urlParser.query.datachannel !== 'false';
//     const info = urlParser.query.info === 'true';
//     const faceDetection = urlParser.query.faceDetection === 'true';
//     const externalVideo = urlParser.query.externalVideo === 'true';
//     const throttleSecret = urlParser.query.throttleSecret;

//     // const role = urlParser.query.role ? urlParser.query.role : 'security';
//     // console.log('MyRole: ', role);

//     // Enable face detection on demand.
//     if (faceDetection)
//       await faceapi.loadTinyFaceDetectorModel('/resources/face-detector-models');

//     if (info) {
//       // eslint-disable-next-line require-atomic-updates
//       window.SHOW_INFO = true;
//     }

//     if (throttleSecret) {
//       // eslint-disable-next-line require-atomic-updates
//       window.NETWORK_THROTTLE_SECRET = throttleSecret;
//     }

//     if (!roomId) {
//       roomId = randomString({ length: 8 }).toLowerCase();

//       urlParser.query.roomId = "Broadcast";// roomId;
//       window.history.pushState('', '', urlParser.toString());
//     }

//     // Get the effective/shareable Room URL.
//     const roomUrlParser = new UrlParse(window.location.href, true);

//     for (const key of Object.keys(roomUrlParser.query)) {
//       // Don't keep some custom params.
//       switch (key) {
//         case 'roomId':
//         case 'handler':
//         case 'simulcast':
//         case 'sharingSimulcast':
//         case 'produce':
//         case 'consume':
//         case 'forceH264':
//         case 'forceVP9':
//         case 'forceTcp':
//         case 'svc':
//         case 'datachannel':
//         case 'info':
//         case 'faceDetection':
//         case 'externalVideo':
//         case 'throttleSecret':
//           break;
//         default:
//           delete roomUrlParser.query[key];
//       }
//     }
//     delete roomUrlParser.hash;

//     const roomUrl = roomUrlParser.toString();

//     let displayNameSet;

//     // If displayName was provided via URL or Cookie, we are done.
//     if (displayName) {
//       displayNameSet = true;
//     }
//     // Otherwise pick a random name and mark as "not set".
//     else {
//       displayNameSet = false;
//       displayName = randomName();
//     }

//     // Get current device info.
//     const device = deviceInfo();
//     console.log('storedispatch', store);
//     store.dispatch(
//       stateActions.setRoomUrl(roomUrl));

//     store.dispatch(
//       stateActions.setRoomFaceDetection(faceDetection));

//     store.dispatch(
//       stateActions.setMe({ peerId, displayName, displayNameSet, device }));

//     roomClient = new RoomClient(
//       {
//         roomId,
//         peerId,
//         displayName,
//         device,
//         handlerName: handler,
//         useSimulcast,
//         useSharingSimulcast,
//         forceTcp,
//         produce,
//         consume,
//         forceH264,
//         forceVP9,
//         svc,
//         datachannel,
//         externalVideo
//       });

//     // RoomId = roomId;
//     // PeerId = peerId;
//     // DisplayName = displayName;
//     // Device = device;
//     // HandlerName = handler;
//     // UseSimulcast = useSimulcast;
//     // UseSharingSimulcast = useSharingSimulcast;
//     // ForceTcp = forceTcp;
//     // Produce = produce;
//     // Consume = consume;
//     // ForceH264 = forceH264;
//     // ForceVP9 = forceVP9;
//     // Svc = svc;
//     // Datachannel = datachannel;
//     // ExternalVideo = externalVideo;

//     // roomClient = new RoomClient(roomId, peerId, displayName, device, handler, useSimulcast, useSharingSimulcast, forceTcp, produce, consume, forceH264, forceVP9, svc, datachannel, externalVideo)
//     // {
//     // };


//     console.log('roomClient1', roomClient.device, roomClient.displayName);

//     // console.log('roomClient1', peerId, displayName, device, handler, useSimulcast, useSharingSimulcast, forceTcp, produce, consume, forceH264, forceVP9, svc, datachannel, externalVideo);
//     // console.log('roomClient1', roomClient.peerId, roomClient.displayName, roomClient.device, roomClient.handler, roomClient.useSimulcast, roomClient.useSharingSimulcast, roomClient.forceTcp, roomClient.produce, roomClient.consume, roomClient.forceH264, roomClient.forceVP9, roomClient.svc, roomClient.datachannel, roomClient.externalVideo);
//     // NOTE: For debugging.
//     window.CLIENT = roomClient; // eslint-disable-line require-atomic-updates
//     window.CC = roomClient; // eslint-disable-line require-atomic-updates

//     // console.log('window.CLIENT', window.CLIENT);
//     // console.log('window.CC', window.CC);

//     render(
//       // <RoomClient RoomId={roomId}/>

//       <Provider store={store}>
//         <RoomContext.Provider value={roomClient}>
//           <Room />,
//       </RoomContext.Provider>
//       </Provider>
//     );
//   }

//   // NOTE: Debugging stuff.

//   window.__sendSdps = function () {
//     logger.warn('>>> send transport local SDP offer:');
//     logger.warn(
//       roomClient._sendTransport._handler._pc.localDescription.sdp);

//     logger.warn('>>> send transport remote SDP answer:');
//     logger.warn(
//       roomClient._sendTransport._handler._pc.remoteDescription.sdp);
//   };

//   window.__recvSdps = function () {
//     logger.warn('>>> recv transport remote SDP offer:');
//     logger.warn(
//       roomClient._recvTransport._handler._pc.remoteDescription.sdp);

//     logger.warn('>>> recv transport local SDP answer:');
//     logger.warn(
//       roomClient._recvTransport._handler._pc.localDescription.sdp);
//   };

//   let dataChannelTestInterval = null;

//   window.__startDataChannelTest = function () {
//     let number = 0;

//     const buffer = new ArrayBuffer(32);
//     const view = new DataView(buffer);

//     dataChannelTestInterval = window.setInterval(() => {
//       if (window.DP) {
//         view.setUint32(0, number++);
//         roomClient.sendChatMessage(buffer);
//       }
//     }, 100);
//   };

//   window.__stopDataChannelTest = function () {
//     window.clearInterval(dataChannelTestInterval);

//     const buffer = new ArrayBuffer(32);
//     const view = new DataView(buffer);

//     if (window.DP) {
//       view.setUint32(0, Math.pow(2, 32) - 1);
//       window.DP.send(buffer);
//     }
//   };

//   window.__testSctp = async function ({ timeout = 100, bot = false } = {}) {
//     let dp;

//     if (!bot) {
//       await window.CLIENT.enableChatDataProducer();

//       dp = window.CLIENT._chatDataProducer;
//     }
//     else {
//       await window.CLIENT.enableBotDataProducer();

//       dp = window.CLIENT._botDataProducer;
//     }

//     logger.warn(
//       '<<< testSctp: DataProducer created [bot:%s, streamId:%d, readyState:%s]',
//       bot ? 'true' : 'false',
//       dp.sctpStreamParameters.streamId,
//       dp.readyState);

//     function send() {
//       dp.send(`I am streamId ${dp.sctpStreamParameters.streamId}`);
//     }

//     if (dp.readyState === 'open') {
//       send();
//     }
//     else {
//       dp.on('open', () => {
//         logger.warn(
//           '<<< testSctp: DataChannel open [streamId:%d]',
//           dp.sctpStreamParameters.streamId);

//         send();
//       });
//     }

//     setTimeout(() => window.__testSctp({ timeout, bot }), timeout);
//   };

//   setInterval(() => {
//     if (window.CLIENT._sendTransport) {
//       window.PC1 = window.CLIENT._sendTransport._handler._pc;
//       window.DP = window.CLIENT._chatDataProducer;
//     }
//     else {
//       delete window.PC1;
//       delete window.DP;
//     }

//     if (window.CLIENT._recvTransport)
//       window.PC2 = window.CLIENT._recvTransport._handler._pc;
//     else
//       delete window.PC2;
//   }, 2000);


//   return (

//     <Provider store={store}>
//       <RoomContext.Provider value={roomClient}>
//         <Room value={roomClient} />
//       </RoomContext.Provider>
// //     </Provider>
//    );


//  }

// export default MediaSoupDashboard;