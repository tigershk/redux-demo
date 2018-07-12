import { combineReducers } from 'redux';
import videoInput from './videoInput';
import videoResults from './videoResults';
import playVideo from './playVideo';
import searchHistory from './searchHistory';

export default combineReducers({
  videoInput,
  videoResults,
  playVideo,
  searchHistory
});
