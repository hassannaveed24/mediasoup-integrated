import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import Settings from './Settings';
import Auth from './Auth';
import Common from './Common';

import room from '../lib/redux/reducers/room';
import me from '../lib/redux/reducers/me';
import producers from '../lib/redux/reducers/producers';
import dataProducers from '../lib/redux/reducers/dataProducers';
import peers from '../lib/redux/reducers/peers';
import consumers from '../lib/redux/reducers/consumers';
import dataConsumers from '../lib/redux/reducers/dataConsumers';
import notifications from '../lib/redux/reducers/notifications';
import roomClient from '../lib/redux/reducers/roomClient'


export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  auth: Auth,
  commonData: Common,
  //MediaSoup reducers
  room,
  me,
  producers,
  dataProducers,
  peers,
  consumers,
  dataConsumers,
  notifications,
  roomClient

});
