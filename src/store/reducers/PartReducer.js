import { CREATED_PART, SET_PARTS } from '../actions/ActionTypes';

const initialState = {
    all: []
  };

const partReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PARTS:
      return {...state, all : action.payload }
    case CREATED_PART:
      return {...state, all : [...state.all, action.payload]}
    default:
      return state;
  }
};

export default partReducer;
