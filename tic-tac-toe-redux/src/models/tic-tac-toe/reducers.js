import { combineReducers } from 'redux';
import { writeX, writeO, setTurn, jumpTo } from './actions'

const squares = (state,  action) => {
  const newState = state.slice();
  switch(action.type) {
    case writeX.type:
      newState[action.payload] = 'X';
      return newState;
    case writeO.type:
      newState[action.payload] = 'O';
      return newState;
    default:
      return state;
  }
};

const history = (history = [{
  squares: Array(9).fill(null)
}], action) => {
  const current = history[history.length - 1].squares;

  switch(action.type) {
    case writeX.type:
      return history.concat([{
        squares: squares(current, action)
      }]);
    case writeO.type:
      return history.concat([{
        squares: squares(current, action)
      }]);
    case jumpTo.type:
      return history.slice(0, action.payload + 1);
    default:
      return history;
  }
};

const xIsNext = (state = true, action) => {
  switch(action.type) {
    case setTurn.type:
      return !state;
    case jumpTo.type:
      return (action.payload % 2) === 0;
    default:
      return state;
  }
};

const stepNumber = (step = 0, action) => {
  switch(action.type) {
    case jumpTo.type:
      return action.payload;
    default:
      return step;
  }
};

const game = combineReducers({
  history,
  xIsNext,
  stepNumber,
});

export default game;
