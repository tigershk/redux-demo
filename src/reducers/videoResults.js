function videoResults(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_VIDEOS':
      return action.results
    default:
      return state;
  }
}

export default videoResults;
