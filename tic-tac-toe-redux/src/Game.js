import React, { Component } from 'react';
import { connect } from 'react-redux'

import Board from './components/Board';
import { calculateWinner } from './libs'
import { jumpTo } from './models';

const Game = ({ history, xIsNext, stepNumber, jumpTo }) => {
  let status;
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  if(winner) {
    status = 'Winner: ' + winner;
  } else {
    if(!current.squares.includes(null)) {
      status = 'Game is a tie!'
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
}

return (
  <div className="game">
    <div className="game-board">
    <Board />
    </div>
    <div className="game-info">
      <div>{status}</div>
      <ol>
        {moves}
      </ol>
    </div>
  </div>
);
};

const mapStateToProps = ({ history, stepNumber, xIsNext }) => ({ history, stepNumber, xIsNext });

const mapDispatchToProps = (dispatch) => {
  return {
    jumpTo: (step) => {
      dispatch(jumpTo(step));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
