import React from 'react';
import SearchResult from './SearchResult';

class SearchResults extends React.Component {
  render() {
    return (
      <div>
        <ul className="results-list">
          {this.props.results.map(result => {
            return <SearchResult
              playVideo={this.props.playVideo}
              result={result}
              key={result.id.videoId}
            />;
          })}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
