import { connect } from "react-redux";
import { History } from '../components/History';
import { fetchVideos } from "../actions";

const mapStateToProps = reduxState => {
  return {
    searchHistory: reduxState.searchHistory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (event, queryString) => {
      event.preventDefault();
      dispatch(fetchVideos(queryString));

    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(History)

{/* <History searchHistory={reduxState.searchHistory}/> */ }