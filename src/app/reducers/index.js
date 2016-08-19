import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { UPDATE_LOCATION } from 'react-router-redux';
import message from './message';

const rootReducer = combineReducers({
  routing: routeReducer,
  message
});

export default rootReducer;
