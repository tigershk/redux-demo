
function searchHistory(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_HISTORY':
      return [...state, action.queryString]
    default:
      return state;
  }
}

export default searchHistory;