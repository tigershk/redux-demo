// This reducer does not do anything. We put it in
// So that we can initialise the store without it breaking

function videoResults(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_VIDEOS':
      return action.results
    default:
      return state;
  }
}

export default videoResults;
