import React from 'react';

export function History(props) {

  return (

    <ul>
      {props.searchHistory.map(listItem => (
        <a href="#"
          onClick={(event) => props.handleSubmit(event, listItem)}
          key={listItem}>
          <li>
            {listItem}
          </li>
        </a>
      ))}
    </ul>
  )
}