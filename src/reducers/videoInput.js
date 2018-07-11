// This reducer does not do anything. We put it in
// So that we can initialise the store without it breaking

function videoInput(state = '', action) {
  switch (action.type) {
    case 'SET_QUERY_STRING':
      return action.queryString
    default:
      return state;
  }
}

export default videoInput;
