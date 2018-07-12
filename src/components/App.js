import React from 'react';
import SearchResultsContainer from '../containers/SearchResultsContainer';
import SearchbarContainer from '../containers/SearchbarContainer'
import PlayerContainer from '../containers/PlayerContainer'
import HistoryContainer from '../containers/HistoryContainer';

class App extends React.Component {

  render() {
    return (
      <div className="app">

        <div className="player">

          <PlayerContainer />

          <h2>Search History</h2>
          <HistoryContainer />
        </div>

        <div className="results">

          <SearchbarContainer />

          <SearchResultsContainer />
        </div>

      </div>
    );
  }
}

export default App;
