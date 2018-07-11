// This reducer does not do anything. We put it in
// So that we can initialise the store without it breaking

function placeholder(state = {}, action){
  switch(action.type){
    default:
      return state;
  }
}

export default placeholder;
