import { combineReducers } from 'redux';
import SessionReducer from './session/session_reducer';

export default combineReducers(
  {
    session: SessionReducer
  }
);
