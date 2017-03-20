const defaultState = {
  category: 'bar'
};

export default function viewerReducer(state=defaultState, action) {
  console.log(state);

  switch (action.type) {
    case 'CATEGORY:CHANGE':
      return Object.assign({}, {category: action.name});
      break;

    default:
      return state;
  }
}
