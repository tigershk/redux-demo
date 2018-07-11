export function setQueryString(queryString) {
  return {
    type: 'SET_QUERY_STRING',
    queryString
  };
};

export function receiveVideos(json) {
  return {
    type: 'RECEIVE_VIDEOS',
    results: json
  }
}

export function fetchVideos(queryString) {
  const KEY = 'AIzaSyDmT5UdKhNCTTcYIgtNI3iXUStYIi4yQpg';

  return function (dispatch, getState) {
    return fetch(`https://www.googleapis.com/youtube/v3/search?q=${queryString}&part=snippet&type=video&key=${KEY}`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveVideos(json.items));
        dispatch(setQueryString(""));
      })
      .catch(error => console.log("Messed up search", error));
  }
};

export function playVideo(videoId) {
  return {
    type: 'PLAY_VIDEO',
    videoId
  }
}

