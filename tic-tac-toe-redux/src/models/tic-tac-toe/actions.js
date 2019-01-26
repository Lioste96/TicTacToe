import { Action } from '../../libs'

export const writeX = Action('WRITE_X');
export const writeO = Action('WRITE_O');

export const writeSquare = (index, xIsNext) => {
  if(xIsNext) {
    return writeX(index);
  } else {
    return writeO(index);
  }
};

export const setTurn = Action('SET_TURN');

export const jumpTo = Action('JUMP_TO');
