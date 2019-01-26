import React from 'react'
import Square from './Square'

const BoardRow = ({ squares, from }) => (
  <div className="board-row">
    {squares.map(
      (square, i) => (
        <Square
          key={from + i}
          value={square}
          index={from + i}
          />
      )
    )}
  </div>
);

export default BoardRow;
