

function videoInput(state = '', action) {
  switch (action.type) {
    case 'SET_QUERY_STRING':
      return action.queryString
    default:
      return state;
  }
}

export default videoInput;
