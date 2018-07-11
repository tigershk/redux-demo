import { connect } from "react-redux";
import SearchResults from '../components/SearchResults'
import { playVideo } from '../actions'

const mapStateToProps = reduxState => {
  return {
    results: reduxState.videoResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    playVideo: videoId => dispatch(playVideo(videoId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)