const oldState = {};

export default function(state = oldState, action) {
  Object.freeze(state);
  
}
