import React from 'react';
 
const Star = ({ selected, onSelect }) => (
  <fastar
    color={selected ? 'yellow' : 'gray'}
    onClick={onSelect}
    style={{ cursor: 'pointer' }}
  />
);

export default Star;