
function playVideo(state = 'xsSnOQynTHs', action) {
  switch (action.type) {
    case 'PLAY_VIDEO':
      return action.videoId
    default:
      return state;
  }
}

export default playVideo;
