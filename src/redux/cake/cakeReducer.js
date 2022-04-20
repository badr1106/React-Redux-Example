import { cakeActionTypes } from "./cakeActionTypes";

const initialState = {
  numOfCakes: 10,
};

export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case cakeActionTypes.BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    case cakeActionTypes.BUY_CAKE_WITH_NUMBER:
      return { ...state, numOfCakes: state.numOfCakes - action.payload };
    default:
      return state;
  }
};
