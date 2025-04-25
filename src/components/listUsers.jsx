import PropTypes from 'prop-types';
// import React from 'react';

export const ListUsers = ({list}) => {
    return list.map((x, idx) => (
    <ul key={idx}>
        <li>{x.name}</li>
            <li>{x.number}</li>
            <button>Delete</button>
    </ul>
  ))
}

ListUsers.propTypes = {
  list: PropTypes.array.isRequired,


};