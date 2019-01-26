import React from 'react'
import { connect } from 'react-redux';

import BoardRow from './BoardRow'

const Board = ({ current }) => (
  <div className="game-board">
    {[0, 3, 6].map(
      elem => (
        <BoardRow
          key={elem}
          squares={current.squares.slice(elem, elem+3)}
          from={elem}
        />
      )
    )}
  </div>
);

const mapStateToProps = ({ history }) => ({ current: history[history.length - 1] });

export default connect(mapStateToProps)(Board);
