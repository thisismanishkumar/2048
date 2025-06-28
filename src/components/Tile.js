
import React from 'react';

const Tile = ({ value }) => {
  const tileClass = `tile tile-${value}`;
  return (
    <div className={tileClass}>
      <div className="tile-inner">{value > 0 ? value : ''}</div>
    </div>
  );
};

export default Tile;
