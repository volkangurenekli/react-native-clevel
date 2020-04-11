import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function selectShowReducer(state = initialState.show, action) {
  switch (action.type) {
    case actionTypes.SELECT_SHOW:
      console.log('VOLKAN: selectShowReducer -> action.type', action.type);
      return action.payload;
    default:
      return state;
  }
}
