// This reducer does not do anything. We put it in
// So that we can initialise the store without it breaking

function playVideo(state = 'xsSnOQynTHs', action) {
  switch (action.type) {
    case 'PLAY_VIDEO':
      return action.videoId
    default:
      return state;
  }
}

export default playVideo;
