import React from 'react';
import { connect } from 'react-redux'

import { calculateWinner } from '../libs'
import { writeSquare, setTurn, jumpTo } from '../models';

const Square = ({onClick, value, xIsNext, current, history }) => (
  <button
    className="square"
    onClick={() => onClick(history, current.squares, xIsNext)}>
    {value}
  </button>
);

const mapStateToProps = ({ history, xIsNext, stepNumber }) => ({
  history: history.slice(0, stepNumber + 1),
  current: history[history.length - 1],
  xIsNext,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (history, squares, xIsNext) => {
    if(calculateWinner(squares) || squares[ownProps.index]) {
      return;
    }
    dispatch(writeSquare(ownProps.index, xIsNext));
    dispatch(setTurn());
    dispatch(jumpTo(history.length));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);
