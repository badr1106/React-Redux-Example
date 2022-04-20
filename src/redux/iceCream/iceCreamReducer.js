import { iceCreamActionTypes } from "./iceCreamActionTypes";

const initialState = {
  numOfIceCreams: 25,
};

export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case iceCreamActionTypes.BUY_ICECREAM:
      return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
    default:
      return state;
  }
};
