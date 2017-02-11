export default function authReducer(state={}, action) {
  switch (action.type) {
    case 'REGISTER:REQUEST':
      return Object.assign({}, state, {loading: true});

    case 'REGISTER:RESPONSE':
      return Object.assign({}, state, {loading: false});

    default:
      return state;
  }
}
