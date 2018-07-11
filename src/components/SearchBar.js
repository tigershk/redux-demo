import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form
        className="d-flex justify-content-center"
        onSubmit={event => this.props.handleSubmit(event, this.props.queryString)}
      >
        <input
          type="text"
          name="query"
          placeholder="Search..."
          onChange={event => this.props.handleChange(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
};

export default SearchBar;
