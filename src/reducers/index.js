import { combineReducers } from 'redux';
import videoInput from './videoInput';
import videoResults from './videoResults';
import playVideo from './playVideo'

export default combineReducers({
  videoInput,
  videoResults,
  playVideo
});
