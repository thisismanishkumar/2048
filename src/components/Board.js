
import React from 'react';
import Tile from './Tile';

const Board = ({grid}) => {
  return (
    <div className="board">
      {grid.flat().map((value, index) => (
        <Tile key={index} value={value} />
      ))}
    </div>
  );
};

export default Board;

