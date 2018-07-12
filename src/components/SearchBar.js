import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form
        className="inputField"
        onSubmit={event => this.props.handleSubmit(event, this.props.queryString)}
      >
        <input
          type="text"
          value={this.props.queryString}
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
