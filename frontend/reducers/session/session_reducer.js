import {RECEIVE_USER} from '../../actions/session/session_actions';
const oldState = {};

export default function(state = oldState, action) {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
}
