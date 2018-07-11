import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import { fetchVideos, setQueryString } from "../actions"

const mapStateToProps = reduxState => {
  return {
    queryString: reduxState.videoInput
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => dispatch(setQueryString(event)),
    handleSubmit: (event, queryString) => {
      event.preventDefault();
      dispatch(fetchVideos(queryString));
    }
  };
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(SearchBar);